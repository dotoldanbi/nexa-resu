(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","10","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("divSpec","7","17",null,"343","22.05%",null,null,null,null,null,this.divWork.form);
            obj.set_taborder("0");
            obj.set_border("1px solid");
            this.divWork.addChild(obj.name, obj);

            obj = new TextArea("taSpec","10","10",null,"322","0.92%",null,null,null,null,null,this.divWork.form.divSpec.form);
            obj.set_taborder("0");
            obj.set_background("black");
            obj.set_color("#39e609");
            obj.set_value("-----------------------------------------------------------------\n/* Site Spec */\n- http://localenv.info:8081/river/nexariver/\n* Nexacro N\n* Spring Framework (Egov)\n* Oracle 11XE\n* Tomcat 9.0\n* Git : https://github.com/dotoldanbi/nexa-resu.git\n-----------------------------------------------------------------\nmail : hugs@daum.net\nphone : 010-2972-4321\n-----------------------------------------------------------------");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_readonly("true");
            this.divWork.form.divSpec.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork.form.divSpec.form
            obj = new Layout("default","",0,0,this.divWork.form.divSpec.form,function(p){});
            this.divWork.form.divSpec.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("INTR0000.xfdl", function() {
        this.application = null;
        this.fvWinId = null;
        this.fvMenuNM = null;
        this.fvFormURL = null;

        this.frmWork_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	var objOwnerFrame = this.getOwnerFrame();

        	this.fvWinId   = objOwnerFrame.param.FORM_ID;
        	this.fvMenuNM = objOwnerFrame.param.MENU_NM;
        	this.fvFormURL = objOwnerFrame.param.FORM_URL;

        	this.divWork.set_url(this.fvFormURL);
        	this.divWork.form.resetScroll();
        };

        this.frmWork_onactivate = function(obj,e)
        {
        	this.application.MdiFrame.form.fn_ActiveTabPage(this.fvWinId);
            this.divWork.form.resetScroll();
        	return;
        };

        this.frmWork_onclose = function(obj,e)
        {
        	this.application.MdiFrame.form.fn_DeleteTabpage(this.fvWinId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmWork_onload,this);
            this.addEventHandler("onactivate",this.frmWork_onactivate,this);
            this.addEventHandler("onclose",this.frmWork_onclose,this);
            this.divWork.form.divSpec.form.taSpec.addEventHandler("onchanged",this.divWork_divSpec_taSpec_onchanged,this);
        };
        this.loadIncludeScript("INTR0000.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
