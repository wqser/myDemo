/**
 * Created by wqs on 2016/11/11.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtabs', 'ojs/ojconveyorbelt', 'ojs/ojradioset'],
    function(oj, ko, $)
    {
        function tabsModel() {
            this.currentColor = ko.observable("red");

            $("#sortTabs").on("ojbeforereorder ojreorder ojbeforeselect ojselect",
                function (event, data) {
                    //save scroll position
                    if ((event.type == "ojbeforereorder" && data.content.attr("id") == "sort-tabs-2") ||
                        (event.type == "ojbeforeselect" && data.fromContent.attr("id") == "sort-tabs-2")) {
                        this._scrollTop = $("#scrollableDiv")[0].scrollTop;
                    }

                    //restore scroll position
                    else if ((event.type == "ojreorder" && data.content.attr("id") == "sort-tabs-2") ||
                        (event.type == "ojselect" && data.toContent.attr("id") == "sort-tabs-2")) {
                        $("#scrollableDiv")[0].scrollTop = this._scrollTop;
                    }
                    return true;
                });
        }
        return tabsModel();
    });
