/**
 * Created by wqs on 2016/11/11.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojprogressbar'],function(oj,ko,$) {
        function loadmodel(){
            function inc(progressValue) {
            if (progressValue() !== -1)
                progressValue(progressValue() + 1);
            };
        this.progressValue = ko.observable(0);
        window.setInterval(function () {
            inc(progressValue);
        }, 200);
        this.progressValue.subscribe(function (newValue) {
            if (newValue == 100) {
                $("#progressbar").remove();
                $("#loadingRegion").removeAttr("aria-busy");
                $("#loadingRegion").removeAttr("aria-describedby");
                $("#loadingRegion").text("Done!");
            }
        });
        }
        return loadmodel();
    })
