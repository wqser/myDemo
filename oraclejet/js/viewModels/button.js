/**
 * Created by wqs on 2016/11/3.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'], function(oj, ko, $) {
    function viewModel() {
        var self = this;
        self.clickedButton = ko.observable("(None clicked yet)");
        self.buttonClick = function (d,e) {
            self.clickedButton(e.currentTarget.id);
        }
    }
    return new viewModel;
    });
