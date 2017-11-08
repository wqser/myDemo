/**
 * Created by wqs on 2016/11/3.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],
    function(oj, ko, $)
    {

        function buttonModel(){
            var self = this;

            // if the contents of the array can change, then replace the [...] with ko.observableArray([...])
            self.entertainers = [
                {label: "Frank", url: "https://en.wikipedia.org/wiki/Frank_Sinatra"},
                {label: "Dean", url: "https://en.wikipedia.org/wiki/Dean_Martin"},
                {label: "Sammy", url: "https://en.wikipedia.org/wiki/Sammy_Davis_Jr."},
            ];

            self.quotes = {
                "Moe": "Moe says: Why I oughta...!",
                "Curly": "Curly says: Oh, a wise guy, eh?",
                "Larry": "Larry says: What's the idea!?"
            };
            self.quote = ko.observable("(No pokes yet)");
            self.buttonClick = function(data, event){
                self.quote(self.quotes[event.currentTarget.id]);
                return true;
            }
        }
        return buttonModel();

    });
