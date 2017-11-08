
define(['jquery', 'knockout', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojanimation', 'ojs/ojnavigationlist'], function($, ko)
    {
        function simpleModel()
        {
            var self = this;
            self.drawerOut = false;
            self.buttonClick = function() {
                console.log(drawer);
                var drawerWidth = $("#drawer").outerWidth();
                if (self.drawerOut) {
                    $("#drawer").animate({left: -drawerWidth});
                    $("#content").animate({marginLeft: 0});
                    self.drawerOut = false;
                } else {
                    $("#drawer").animate({left: 0});
                    $("#content").animate({marginLeft: drawerWidth});
                    self.drawerOut = true;
                }
            };
        }

        return simpleModel;
    });
