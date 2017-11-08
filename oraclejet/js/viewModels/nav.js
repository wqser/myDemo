/**
 * Created by wqs on 2017/8/3.
 */
define([ 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojoffcanvas', 'ojs/ojbutton', 'ojs/ojradioset'],
    function(oj,ko,$){
        function nav(){
            var self = this;
            self.drawer =
            {
                "displayMode": "push",
                "selector": "#drawer",
                "content": "#main"
            };

            self.toggleDrawer = function()
            {
                return oj.OffcanvasUtils.toggle(self.drawer);
            };
        }
        return nav;
    });