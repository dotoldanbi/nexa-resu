//XJS=common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /************************************************************************
        TITLE  : COMMON JS
        AUTHOR : jhsong
        DATE   : 2024.01.01.
        ************************************************************************/

        /************************************************************************
        desc : bottomFrame에 텍스트 표시
        param : 문자열
        return : N/A
        ************************************************************************/
        this.lfn_dispBottom = function(log) {
        	var objApp = nexacro.getApplication();
        	var objFrm = objApp.mainframe.VFSet01.BottomFrame.form.Static01;
        	objFrm.set_text(log);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
