(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,65);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Popup", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">TOBESOFT</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">AI</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">ChatGPT</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">GEMINI</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">Copilot</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_top_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","24",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_top_bg02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","24","160","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_top_logo_song");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","190","24","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","310","24","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","430","24","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","550","24","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","670","24","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","0","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Hello!");
            obj.set_cssclass("sta_top_textWht");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","190","64","120","101",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_Popup");
            obj.set_captioncolumn("Column0");
            obj.set_idcolumn("Column2");
            obj.set_levelcolumn("Column1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,65,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupMenu00.trackPopupByComponent(this.Button00,0,41);
        };

        this.PopupMenu00_onlbuttonup = function(obj,e)
        {
        	trace(e.bindindex);
        };



        this.fn_openMenu = function(sMenuId)
        {
        	var objMdiFrame = this.application.MdiFrame;
        	var objWorkFrame = this.application.WorkFrame;

        	var nFRow;
        	var sPGMPATH;
        	var sPGMID;

        	var nFRowOpen;
        	var sWinId;
        	var sMenuNm;
        	var sMenuNavi;

        	var objMenuDs = this.application.gdsLeftMenu;	  // g ds
        	var objOpenMenuDs = this.application.gdsOpenMenu; // g ds

        	// menu ds
        	nFRow 		= objMenuDs.findRow("MENU_CD", sMenuId);
        	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PGM_PATH");
        	sPGMID 		= objMenuDs.getColumn(nFRow, "PGM_ID")
        	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");

        	// open menu ds
        	nFRowOpen = objOpenMenuDs.findRow("MENU_CD", sMenuId);
        	sWinId = objOpenMenuDs.getColumn(nFRowOpen, "WINID");


        	if (nFRow==-1){
        		alert("Menu가 존재하지 않습니다.");
        		return;
        	} else if(this.gfnIsNull(sPGMPATH)==true){
        		return;
        	}

        	if(nFRowOpen>-1){
        		objMdiFrame.form.fn_ActiveTabPage(sWinId);
        		return;
        	}

        	if(objOpenMenuDs.rowcount > 12){
        		alert("메뉴는  8개이상 오픈할 수 없습니다.");
        		return;
        	}

        	sWinId = sMenuId + "_" + objOpenMenuDs.rowcount + "_" + parseInt(Math.random() * 100);

        	var oParam = { FORM_ID : sWinId,
                           MENU_NM : sMenuNm,
                           FORM_URL : sPGMPATH+"::"+sPGMID
        				   };

        	// 차일드프레임
        	var objChildFrame = new ChildFrame();
        	// 파일드프레임 초기화
        	objChildFrame.init(sWinId, 0, 0, null, null, 0, 0);

        	// 워크프레임 에 차일드프레임 추가
        	objWorkFrame.addChild(objChildFrame.name, objChildFrame);
        	objChildFrame.param = oParam;
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_showtitlebar(false);
         	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_formurl("frame::frmWork.xfdl");
        	objChildFrame.show();

        	// 미드프레임에 탭 추가( 메뉴타이틀 탭 )
        	objMdiFrame.form.fn_AddTabPage(sWinId, sMenuNm);

        	this.fn_AddOpenMenu(sWinId, sMenuId, sMenuNm);

        	objMdiFrame.form.fn_ActiveTabPage(sWinId);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.PopupMenu00.addEventHandler("onlbuttonup",this.PopupMenu00_onlbuttonup,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
