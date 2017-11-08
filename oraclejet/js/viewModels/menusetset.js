/**
 * Created by wqs on 2016/11/4.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton','ojs/ojMenu'],function(oj,ko,$){
    function MenuModel() {
        var self = this;
        self.selectedMenuItem = ko.observable("(None selected yet)");

        self.menuSelect = function( event, u2 ) {
            self.selectedMenuItem(u2.item.children("a").text());
        };
    }
    return MenuModel;
})