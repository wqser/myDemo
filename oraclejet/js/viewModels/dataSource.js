/**
 * Created by wqs on 2016/11/9.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',
    'ojs/ojdatagrid', 'ojs/ojarraydatagriddatasource'],function (oj,ko,$) {
    function dataSource(){

        this.dataSource=new oj.ArrayDataGridDataSource([[1,2,3],[4,5,6],[7,8,9]])
    }
return dataSource;
})