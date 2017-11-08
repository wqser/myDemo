/**
 * Created by wqs on 2016/11/3.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],function(oj,ko,$){
    function changeModel(){
        var self = this;
        self.disableControls = ko.observable(false);
    }
    return changeModel();
});