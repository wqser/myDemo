/**
 * Created by wqs on 2016/11/3.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],function (oj,ko,$) {
    function buttonModel() {
        this.isAdvanced = ko.observableArray(false);
    }
    return buttonModel();
})