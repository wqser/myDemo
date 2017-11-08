/**
 * Created by wqs on 2016/11/7.
 */
define(['ojs/ojcore','knockout','jquery','ojs/ojknockout','ojs/ojbutton'],
    function(oj,ko,$) {
        function checkModel() {
            $(function () {
                $("#checkall").click(function(){
                    if($("#checkall").prop("checked")==true){
                        $("input[name='hobby']").prop("checked",true)
                    }
                })
                $("input[name='hobby']").click(function(){
                    if($("input[name='hobby']").prop("checked")==false){
                        $("checkall").prop(false)
                    }
                })
            })
        }

        return checkModel();
    })