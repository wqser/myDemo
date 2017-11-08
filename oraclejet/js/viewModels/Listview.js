/**
 * Created by wqs on 2016/11/9.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlistview', 'ojs/ojindexer', 'ojs/ojdatacollection-common', 'ojs/ojbutton'],
    function(oj, ko, $)
    { function  listModel(){

        $(document).ready(
            function()
            {
                $.getJSON( "cookbook/dataCollections/indexer/characterIndexer/contacts.json",
                    function(data)
                    {
                        function MyModel()
                        {
                            var self = this;

                            dataSource = new oj.JsonTreeDataSource(data);
                            itemOnly = function(context)
                            {
                                return context['leaf'];
                            };

                            selectTemplate = function(file, bindingContext)
                            {
                                return bindingContext.$itemContext.leaf ? 'item_template' : 'group_template';
                            };

                            getIndexerModel = function()
                            {
                                if (!self.indexerModel)
                                {
                                    var listView = $("#listview");
                                    var indexerModel = listView.ojListView("getIndexerModel");
                                    self.indexerModel = indexerModel;
                                }
                                return self.indexerModel;
                            };

                            layoutViewRadios = [{id: 'thumbView', icon: 'demo-icon-font demo-grid-icon-16'},
                                {id: 'listView', icon: 'demo-icon-font demo-list-icon-16'}
                            ];

                            activeLayout = ko.observable("listView");
                            handleLayoutChange = function(event, ui)
                            {
                                $('#listview').toggleClass("oj-listview-card-layout");
                                if ($('#listview').hasClass("oj-listview-card-layout"))
                                {
                                    $('#listviewcontainer').children()
                                        .addClass("demo-contacts-container-landscape")
                                        .removeClass("demo-contacts-container-portrait");
                                }
                                else
                                {
                                    $('#listviewcontainer').children()
                                        .addClass("demo-contacts-container-portrait")
                                        .removeClass("demo-contacts-container-landscape");
                                }
                                $('#listview').ojListView('refresh');
                            };
                        }

                        ko.applyBindings(new MyModel(), document.getElementById('wqs'));
                    })
            }
        );
    }
    return listModel;
    });
