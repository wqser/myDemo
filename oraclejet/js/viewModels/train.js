/**
 * Created by wqs on 2016/11/11.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtrain', 'ojs/ojbutton'],
    function(oj, ko, $)
    {
        function TrainData() {
            this.currentStepValue = ko.observable('stp1');
            this.stepArray =
                ko.observableArray(
                    [{label:'Step One', id:'stp1'},
                        {label:'Step Two Text is Long Very Long', id:'stp2'},
                        {label:'Step Three Text is Even Longer Than Step Two Text', id:'stp3'},
                        {label:'Step Four', id:'stp4'}]);
            this.currentStepValueText = function() {
                return ($("#train").ojTrain("getStep", this.currentStepValue())).label;
            };
        };
return TrainData;


    });
