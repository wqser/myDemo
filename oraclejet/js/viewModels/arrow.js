/**
 * Created by wqs on 2016/11/7.
 */
define(['ojs/ojcore', 'knockout', 'jquery',
        'ojs/ojknockout', 'ojs/ojconveyorbelt', 'ojs/ojbutton'],
    function(oj, ko, $)
    {
        function HoriModel(){

            self.currentNavArrowPlacement = ko.observable("adjacent");
            self.currentNavArrowVisibility = ko.observable("auto");
        }
        return HoriModel;
    });