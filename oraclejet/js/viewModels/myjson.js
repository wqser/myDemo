/**
 * Created by wqs on 2016/11/9.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlistview','ojs/ojdatacollection-common', 'ojs/ojbutton'],
    function(oj,ko,$){
    function jsonModel(){
        self=this;
        self.jsonValue=ko.observableArray([{id:'1',name:'tom1','age':'43'},{id:'2',name:'tom2','age':'43'},{id:'3',name:'tom3','age':'43'}]);
        self.dataSource = new oj.ArrayTableDataSource(self.jsonValue); // Change idAttribute to select by attribute
        self.selectTemplate=function(file,bindingContext){
            return  'item_template';
        };
        this.layoutViewRadios = [{id: 'thumbView', icon: 'demo-icon-font demo-grid-icon-16'},
            {id: 'listView', icon: 'demo-icon-font demo-list-icon-16'}
        ];

        this.activeLayout = ko.observable("listView");


        this.handleLayoutChange = function(event, ui)
        {
                $('#listview').toggleClass("oj-listview-card-layout")
                .ojListView('refresh');
            if ($('#listview').hasClass("oj-listview-card-layout")){
                $('#listview').addClass('a');
            }else{
                $('#listview').removeClass('a');
            }

        };
    }
    return jsonModel;
});
