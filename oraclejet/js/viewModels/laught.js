/**
 * Created by wqs on 2016/11/4.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton','ojs/ojMenu'],function(oj,ko,$){

    function MenuModel() {
        var self = this;
        self.selectedMenuItem = ko.observable("(None selected yet)");

        self.launch = function( model, event ) {
            $("#myMenu").ojMenu("open", event);
        };

        self.menuOpen = function( event ) {
            var myLauncher = $("#myLauncher");
            var currentLauncher = $(event.target).ojMenu("getCurrentOpenOptions").launcher;

            // This "which launcher?" check is relevant when a menu is shared among several launchers.
            // It is not needed in this demo, in which only one launcher can open the menu.
            if ( myLauncher.is(currentLauncher) )
                myLauncher.addClass("bold");
        };

        self.menuClose = function( event ) {
            $("#myLauncher").removeClass("bold");
        };

        self.menuItemSelect = function( event, ui ) {
            self.selectedMenuItem(ui.item.children("a").text());
        };
    }

    return MenuModel;
})