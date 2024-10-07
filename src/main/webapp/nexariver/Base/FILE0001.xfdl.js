(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FILE0001");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("· Home > 소개  > 파일관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("stcBorder","8","41",null,null,"10","32",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileList","22","64","708","248",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileName\"/><Cell col=\"1\" text=\"fileSize (bytes)\"/></Band><Band id=\"body\"><Cell text=\"bind:fileName\"/><Cell col=\"1\" text=\"bind:fileSize\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","740","64","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_add01");
            obj.set_text("파일추가");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","740","93","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_delete01");
            obj.set_text("초기화");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","740","121","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_save01");
            obj.set_text("저장");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","22","329","708","281",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1090,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FILE0001.xfdl", function() {
        /************************************************************************
        TITLE  : 개인 이력
        AUTHOR : jhsong
        DATE   : 2024.01.01.
        ************************************************************************/

        this.sFileUrl = "http://" + nexacro.getEnvironmentVariable("SVR_URL") + ":8081/river/uploadFiles.do"; //파일전송 URL
        this.nMaxFileSize = 2000000;  //각 파일 최대사이즈 (2 Mbyte)

        /************************************************************************
        FILE0001_onload : form onload
        ************************************************************************/
        this.FILE0001_onload = function(obj,e)
        {
          //파일업로드시 파일저장 폴더경로 PostData 셋팅
          this.FileUpTransfer.setPostData("filepath","river");
          //파일업로드 전송 URL 셋팅
          this.FileUpTransfer.set_url(this.sFileUrl);
        };


        /************************************************************************
        btnAdd_onclick : 파일추가 버튼클릭
        ************************************************************************/
        this.btnAdd_onclick = function(obj,e)
        {
          this.FileDialog.open( "파일선택", FileDialog.LOAD );
        };


        /************************************************************************
        //파일선택창(FileDialog) 닫힐시
        //Web 은 e.reason 이 1(FileDialog.LOAD) 이나 3(FileDialog.MULTILOAD) 일경우에만 발생
        ************************************************************************/
        this.FileDialog_onclose = function(obj,e)
        {
          if(e.reason == 0 ) {  //파일선택 취소
            return;
          }else{
            if(e.reason == 1) {    //FileDialog.LOAD 옵션의 파일선택
              var vFile = e.virtualfiles[0];
              var isExist = this.FileUpTransfer.existFile(vFile);

              //파일중복체크
              if(isExist){
                alert("이미추가된 파일이 있습니다.");
                return;
              }

              //VirtualFile 이벤트 생성
              vFile.addEventHandler("onsuccess", this.Upload_VirtualFile_onsuccess, this);
              vFile.addEventHandler("onerror", this.Upload_VirtualFile_onerror, this);

              //File 사이즈 체크를 위해
              vFile.open(null,VirtualFile.openRead);
            }
          }
        };


        /************************************************************************
        Upload_VirtualFile_onsuccess : 업로드용 Virtual 파일 onsuccess 이벤트
        ************************************************************************/
        this.Upload_VirtualFile_onsuccess = function(obj, e)
        {
          if (e.reason == 1)  //open() callback
          {
            //파일사이즈 체크
            obj.getFileSize();
          }
          if (e.reason == 9) //getFileSize() callback
          {
            obj.close();

            var sFileName = obj.filename;
            var nFileSize = e.filesize;

            if(nFileSize > this.nMaxFileSize){
              alert("첨부파일 최대용량은 2 MByte 입니다.");
              return;
            }

            //FileUpTransfer 해당 파일추가
            var nIdx = this.FileUpTransfer.addFile(sFileName,obj);

            //화면 파일정보 셋팅
            var nRow = this.dsFileList.insertRow(nIdx);
             this.dsFileList.setColumn(nRow, "fileName", sFileName);
             this.dsFileList.setColumn(nRow, "fileSize", nFileSize);
          }
        }


        /************************************************************************
        Upload_VirtualFile_onerror : 업로드용 Virtual 파일 oneroor 이벤트
        ************************************************************************/
        this.Upload_VirtualFile_onerror = function(obj, e)
        {
          var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
          msg += "errortype : "+e.errortype+"\n";
          msg += "errormsg : "+e.errormsg+"\n";
          msg += "statuscode : "+e.statuscode;

          alert(msg);
        }

        /************************************************************************
        grdFileList_onexpandup : 그리드 삭제이미지 클릭시
        ************************************************************************/
        this.grdFileList_onexpandup = function(obj,e)
        {
          var nRow = e.row;

          //FileUpTransfer 해당 파일삭제
          var nIdx = this.FileUpTransfer.removeFileByIndex(nRow);

          //정상삭제 시 해당 데이터 삭제
          if(nIdx > -1) {
            obj.getBindDataset().deleteRow(nRow);
          }
        };


        /************************************************************************
        btnInit_onclick : 초기화 버튼 클릭시
        ************************************************************************/
        this.btnInit_onclick = function(obj,e)
        {
          //파일정보 초기화
          this.fn_FileClear();
        };


        /************************************************************************
        FileUpTransfer_onsuccess : 파일전송 성공시
        ************************************************************************/
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
          var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  SUCCESS >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
          msg += "code :"+e.code+"\n";
          msg += "message :"+e.message+"\n";
          msg += "url :"+e.url+"\n";
          msg += "datasets[0].saveXML() :"+e.datasets[0].saveXML()+"\n";

          this.taLog.set_value(msg);

          //파일정보 초기화
          this.fn_FileClear();
        };


        /************************************************************************
        FileUpTransfer_onprogress : 파일전송 중
        ************************************************************************/
        this.FileUpTransfer_onprogress = function(obj,e)
        {
          trace(e.loaded +" / "+e.total +" Byte Uploading...");
        };


        /************************************************************************
        FileUpTransfer_onerror : 파일전송 실패시
        ************************************************************************/
        this.FileUpTransfer_onerror = function(obj,e)
        {
          var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
          msg += "statuscode: "+e.statuscode+"\n";
          msg += "requesturi: "+e.requesturi+"\n";
          msg += "locationuri: "+e.locationuri+"\n" ;
          msg += "errormsg: "+e.errormsg+"\n";

          this.taLog.set_value(msg);
        };


        /************************************************************************
        btnSave_onclick : 파일전송 버튼클릭
        ************************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
          if(this.FileUpTransfer.filelist.length == 0) {
            alert("첨부한 파일이 없습니다.");
            return;
          }

          //파일전송
          this.FileUpTransfer.upload();
        };


        /************************************************************************
        fn_FileClear : 파일정보 초기화
        ************************************************************************/
        this.fn_FileClear = function (){
          //FileUpTransfer 파일 모두삭제
          this.FileUpTransfer.clearFileList();
          //파일정보 모두삭제
          this.dsFileList.clearData();
        }





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FILE0001_onload,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
        };
        this.loadIncludeScript("FILE0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
