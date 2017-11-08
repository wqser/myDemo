define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtrain', 'ojs/ojbutton'],
    function(oj, ko, $)
    {
        function TrainData1() {
            self=this;
            self.selected2 = ko.observable('stp1');
            self.stepArray2 =ko.observableArray([{label:'Step One', id:'stp1'},
                {label:'Step Two', disabled: true, id:'stp2'},
                {label:'Step Three', id:'stp3'},
                {label:'Step Four', id:'stp4'},
                {label:'Step Five', id:'stp5'}]);
            this.nextStep2 = function() {
                var next = $("#train2").ojTrain("nextSelectableStep");
                if(next != null)
                    self.selected2(next);
            }
            this.previousStep2 = function() {
                var prev = $("#train2").ojTrain("previousSelectableStep");
                if(prev != null)
                    self.selected2(prev);
            }
            this.selectedText = function() {
                return ($("#train2").ojTrain("getStep", self.selected2())).label;
            };

        };
        return  TrainData1();


    });
