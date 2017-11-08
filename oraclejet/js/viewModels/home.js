define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojbutton'], function(oj, ko, $) {
    function ViewModel() {
        var self = this;

        self.text = ko.observable('test');

        self.onHelloButtonClick = function() {
            self.text('clicked');
        }
    }

    return ViewModel;
});
