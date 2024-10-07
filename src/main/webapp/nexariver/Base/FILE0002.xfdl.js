(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FILE0002");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"realFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dispFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"realFileNm\">resume.doc</Col><Col id=\"dispFileNm\">이력서_경력기술서</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"realFileNm\">KOSA.pdf</Col><Col id=\"dispFileNm\">KOSA(소프트웨어기술자 경력증명)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"realFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dispFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
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

            obj = new Grid("grdFileList","22","75","1048","248",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"fileName\"/><Cell col=\"2\" text=\"fileSize (bytes)\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:realFileNm\"/><Cell col=\"2\" text=\"bind:dispFileNm\" displaytype=\"text\" expandimage=\"url(&apos;imagerc::img_WF_down01.png&apos;)\" expandshow=\"show\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","22","329","1048","281",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload","994","47","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_down01");
            obj.set_text("다운로드");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
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
        this.addIncludeScript("FILE0002.xfdl","LIB::common.xjs");
        this.registerScript("FILE0002.xfdl", function() {
        /************************************************************************
        TITLE  : 개인 이력
        AUTHOR : jhsong
        DATE   : 2024.01.01.
        ************************************************************************/

        this.executeIncludeScript("LIB::common.xjs"); /*include "LIB::common.xjs"*/;

        this.sFileUrl = "http://" + nexacro.getEnvironmentVariable("SVR_URL") + ":8080/river/downloadFile.do"; //파일다운로드 URL

        //폼 로딩 후 이벤트
        this.FILE0002_onload = function(obj,e)
        {
          //파일다운로드시 파일다운 폴더경로 PostData 셋팅
          this.FileDownTransfer.setPostData("filepath","documents");
          //파일업로드 전송 URL 셋팅
          this.FileDownTransfer.set_url(this.sFileUrl);
        };

        //파일다운로드 버튼클릭
        this.btnDownload_onclick = function(obj,e)
        {
          var objDs = this.dsFileList;
          var nCnt = objDs.getRowCount();

          this.dsDownFileList.clearData();

          for(var i=0;i<nCnt;i++){
            var nChk = objDs.getColumn(i,"chk");

            if(nChk==1) {
              var nRow = this.dsDownFileList.addRow();

              this.dsDownFileList.setColumn(nRow, "realFileNm", objDs.getColumn(i,"realFileNm"));
              this.dsDownFileList.setColumn(nRow, "dispFileNm", objDs.getColumn(i,"dispFileNm"));
            }
          }

          if(this.dsDownFileList.getRowCount() == 0) {
            alert("다운로드 할 파일을 선택하세요.");
            return;
          }

          /*
            서버로 전송할 파일정보를 셋팅

            [추천] String 에 여러파일명 정보 넘겨 서버에서 잘라서 처리
            setPostData("file_realFileNms","1.xlsx,111.xlsx,Hydrangeas.jpg")
            setPostData("file_dispFileNms","파일1.xlsx,파일111.xlsx,파일Hydrangeas.jpg")

            [비추천] 데이터셋을 넘기지 못해 XML 스트링으로 넘겨 서버에서 Dataset으로 변경
            몇가지 문자만 변환해서 해보니 동작하여 작성해 봅니다 (공식방법 아닙니다)
          */
          this.FileDownTransfer.setPostData("fileInfo",this.dsDownFileList.saveXML());

          //NRE 를 위한 다운로드 Default 파일명
          if(this.dsDownFileList.getRowCount() > 1) {
            //파일여러개 선택시 zip 파일로 압축하여 다운로드
            this.FileDownTransfer.set_downloadfilename("첨부파일.zip");
          }else{
            //파일이 1개일 경우 해당 파일명으로 다운로드
            this.FileDownTransfer.set_downloadfilename(this.dsDownFileList.getColumn(0, "dispFileNm"));
          }

          //파일다운로드 실행
          this.FileDownTransfer.download();
        };

        //파일다운로드 성공시 (NRE 에서만 지원)
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
          var sMsg = e.targetfullpath +"\n"+  e.url;

          alert(sMsg);
          this.lfn_dispBottom(sMsg);
        };


        //파일다운로드 실패시 (NRE 에서만 지원)
        this.FileDownTransfer_onerror = function(obj,e)
        {
          var sMsg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
          sMsg += "statuscode: "+e.statuscode+"\n";
          sMsg += "requesturi: "+e.requesturi+"\n";
          sMsg += "locationuri: "+e.locationuri+"\n" ;
          sMsg += "errormsg: "+e.errormsg+"\n";

          alert(sMsg);
          this.lfn_dispBottom(sMsg);
        };


        this.grdFileList_onexpandup = function(obj,e)
        {
        	if (e.cell === 2)
        	{
        	trace(e.row);
              //var nRow = this.dsDownFileList.addRow();
        	  this.dsDownFileList.clearData();
        	  var nRow = this.dsDownFileList.addRow();
              this.dsDownFileList.setColumn(nRow, "realFileNm", this.dsFileList.getColumn(e.row,"realFileNm"));
              this.dsDownFileList.setColumn(nRow, "dispFileNm", this.dsFileList.getColumn(e.row,"dispFileNm"));

        	  // FileDownTransfer
        	  this.FileDownTransfer.setPostData("fileInfo",this.dsDownFileList.saveXML());
        	  this.FileDownTransfer.set_downloadfilename(this.dsDownFileList.getColumn(e.row, "dispFileNm"));

        	  //파일다운로드 실행
        	  this.FileDownTransfer.download();
        	}

        };


        // 그리드 HeadRow Click event
        this.grdFileList_onheadclick = function(obj,e)
        {
        	if(e.cell == 0){
        		var chked = this.grdFileList.getCellProperty("HEAD", 0, "text");

        		this.grdFileList.setCellProperty("HEAD", 0, "text", !chked);
        		for(var i=0; i< this.grdFileList.rowcount; i++){
        				this.dsFileList.setColumn(i, "chk", !chked);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FILE0002_onload,this);
            this.grdFileList.addEventHandler("onexpandup",this.grdFileList_onexpandup,this);
            this.grdFileList.addEventHandler("onheadclick",this.grdFileList_onheadclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("FILE0002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
