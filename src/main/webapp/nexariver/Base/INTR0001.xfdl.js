(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("INTR0001");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWorkHist", this);
            obj._setContents("<ColumnInfo><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/><Column id=\"PART\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMP_NAME\">코스모컨설팅</Col><Col id=\"START_DT\">20090518</Col><Col id=\"END_DT\">20110930</Col><Col id=\"PART\">시스템개발2과</Col></Row><Row><Col id=\"COMP_NAME\">NIP</Col><Col id=\"PART\">시스템개발</Col><Col id=\"START_DT\">20070501</Col><Col id=\"END_DT\">20081031</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCert", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_ORG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CERT_NAME\">정보처리기사</Col><Col id=\"CERT_NO\">06204010938T</Col><Col id=\"CERT_DATE\">20061218</Col><Col id=\"CERT_ORG\">한국산업인력공단</Col></Row><Row><Col id=\"CERT_NAME\">OCP</Col><Col id=\"CERT_NO\">20070501</Col><Col id=\"CERT_DATE\">20061015</Col><Col id=\"CERT_ORG\">ORACLE</Col></Row><Row><Col id=\"CERT_NAME\">SCJP</Col><Col id=\"CERT_DATE\">20060928</Col><Col id=\"CERT_ORG\">SUN MICROSYSTEMS</Col></Row><Row><Col id=\"CERT_NAME\">SCSA</Col><Col id=\"CERT_DATE\">20050930</Col><Col id=\"CERT_ORG\">SUN MICROSYSTEMS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGraduate", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ORG_NAME\">충북대학교</Col><Col id=\"MAJOR\">사회학</Col><Col id=\"DEGREE\">학사(B.A)</Col><Col id=\"START_DT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEducation", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM N 실무활용</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2024-05-2121-234052</Col><Col id=\"START_DT\"/></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM N 운영자</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2024-05-2222-234053</Col></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM 17 운영자</Col><Col id=\"EDU_NO\">2021-02-1818-71214</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM 17 실무활용</Col><Col id=\"EDU_NO\">2021-01-2828-70954</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM 17 기본</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2021-01-2026-70952</Col></Row><Row><Col id=\"EDU_NAME\">넥사크로플랫폼14</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2016-10-0405-2212</Col></Row><Row><Col id=\"EDU_NAME\">PMP로 가는길</Col><Col id=\"EDU_ORG\">에듀퓨어</Col><Col id=\"EDU_NO\">E1001-2600004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


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
            obj.set_taborder("3");
            obj.set_text("· Home > 소개  > 이력");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("stcBorder","8","41",null,null,"10","32",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgProfile","21","55","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'../song_halfbiz.jpg\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("stcName","156","56","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_font("normal bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stcNmVal","218","56","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("송주현");
            obj.set_font("normal bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","149","84","923","1",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static03");
            obj.set_border("1px dashed");
            this.addChild(obj.name, obj);

            obj = new Tab("tabHist","148","97",null,null,"18","190",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpWorkHist",this.tabHist);
            obj.set_text("근무경력");
            this.tabHist.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","8",null,"316","1.19%",null,null,null,null,null,this.tabHist.tpWorkHist.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsWorkHist");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사명\"/><Cell col=\"1\" colspan=\"2\" text=\"근무기간\"/><Cell col=\"3\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:COMP_NAME\"/><Cell col=\"1\" text=\"bind:START_DT\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:END_DT\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:PART\"/></Band></Format></Formats>");
            this.tabHist.tpWorkHist.addChild(obj.name, obj);

            obj = new Tabpage("tpCert",this.tabHist);
            obj.set_text("기술자격");
            this.tabHist.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","8","8",null,"410","2.28%",null,null,null,null,null,this.tabHist.tpCert.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCert");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자격명\"/><Cell col=\"1\" text=\"자격번호\"/><Cell col=\"2\" text=\"취득일\"/><Cell col=\"3\" text=\"발급기관\"/></Band><Band id=\"body\"><Cell text=\"bind:CERT_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CERT_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CERT_ORG\" textAlign=\"center\"/></Band></Format></Formats>");
            this.tabHist.tpCert.addChild(obj.name, obj);

            obj = new Tabpage("tpGraduate",this.tabHist);
            obj.set_text("학력");
            this.tabHist.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","8","8",null,"410","2.28%",null,null,null,null,null,this.tabHist.tpGraduate.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsGraduate");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"학과(전공)\"/><Cell col=\"2\" text=\"학위\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MAJOR\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEGREE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.tabHist.tpGraduate.addChild(obj.name, obj);

            obj = new Tabpage("tpEdu",this.tabHist);
            obj.set_text("교육");
            this.tabHist.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","8","8",null,"410","2.28%",null,null,null,null,null,this.tabHist.tpEdu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsEducation");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"과정명\"/><Cell col=\"1\" text=\"교육기관명\"/><Cell col=\"2\" text=\"수료번호\"/></Band><Band id=\"body\"><Cell text=\"bind:EDU_NAME\"/><Cell col=\"1\" text=\"bind:EDU_ORG\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:EDU_NO\" textAlign=\"center\"/></Band></Format></Formats>");
            this.tabHist.tpEdu.addChild(obj.name, obj);

            obj = new Grid("grdFileList","150","493",null,"118","1.65%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"fileName\"/><Cell col=\"2\" text=\"fileSize (bytes)\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:realFileNm\"/><Cell col=\"2\" text=\"bind:dispFileNm\" displaytype=\"text\" expandimage=\"url(&apos;imagerc::img_WF_down01.png&apos;)\" expandshow=\"show\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload","grdFileList:-74.01499999999987","465",null,"25","1.65%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_down01");
            obj.set_text("다운로드");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabHist.tpWorkHist.form
            obj = new Layout("default","",0,0,this.tabHist.tpWorkHist.form,function(p){});
            this.tabHist.tpWorkHist.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabHist.tpCert.form
            obj = new Layout("default","",0,0,this.tabHist.tpCert.form,function(p){});
            this.tabHist.tpCert.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabHist.tpGraduate.form
            obj = new Layout("default","",0,0,this.tabHist.tpGraduate.form,function(p){});
            this.tabHist.tpGraduate.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabHist.tpEdu.form
            obj = new Layout("default","",0,0,this.tabHist.tpEdu.form,function(p){});
            this.tabHist.tpEdu.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("INTR0001.xfdl","LIB::common.xjs");
        this.registerScript("INTR0001.xfdl", function() {
        /************************************************************************
        TITLE  : 개인 이력
        AUTHOR : jhsong
        DATE   : 2024.01.01.
        ************************************************************************/
        this.executeIncludeScript("LIB::common.xjs"); /*include "LIB::common.xjs"*/;

        this.sFileUrl = "http://" + nexacro.getEnvironmentVariable("SVR_URL") + ":8081/river/downloadFile.do"; //파일다운로드 URL

        this.INTR0001_onload = function(obj,e)
        {
        	// 탭 인덱스 초기화
        	this.tabHist.set_tabindex(0);

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
          trace(objDs.saveXML());
          for(var i=0;i<nCnt;i++){
            var nChk = objDs.getColumn(i,"chk");

            if(nChk=="true") {
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
            this.addEventHandler("onload",this.INTR0001_onload,this);
            this.tabHist.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.grdFileList.addEventHandler("onexpandup",this.grdFileList_onexpandup,this);
            this.grdFileList.addEventHandler("onheadclick",this.grdFileList_onheadclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("INTR0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
