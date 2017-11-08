/**
 * Created by wqs on 2016/11/9.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlistview'],function(oj,ko,$) {
    function listtestModel(){
        this.dataSource=new oj._JsonTreeNodeDataSource({'a':'b','c':'d'})
    }
    return listtestModel();
})