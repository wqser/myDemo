/**
 * Created by wqs on 2016/11/4.
 */
define(['ojs/ojcore','knockout','jquery','ojs/ojknockout','ojs/ojbutton'],
    function(oj,ko,$){
    function viewModel(){
        var self=this;
        self.isAdvanced=ko.observable(false);
    }
    return viewModel();
})