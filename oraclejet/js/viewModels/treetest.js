/**
 * Created by wqs on 2016/11/10.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtree','ojs/ojbutton','ojs/ojCheckboxset'],function(oj,ko,$){
function treetest(){
    self = this;
    self.currentColor=ko.observableArray([]);
    var change = function(stage){
        if(stage.html()=='+'){
            stage.html('-');
            stage.next().css("display","block");
        }else if(stage.html()=='-'){
            stage.html('+');
            stage.next().css("display","none");

        }
    };

    self.changeClick = function(data,event){

        $("#jibenopt").attr("checked",true);
        var stage = $(event.target);
        change(stage);
    }
    self.select3=ko.observableArray([]);
    self.select2=ko.pureComputed({
        read:function () {
            if(self.select3().length>0){
                return true;
            }else{
                return false;
            }
        },
        write:function (value) {
            if(value){
                self.select3([31,32,33,34])
            }else{
                self.select3([])
            }

        },
        owner:this
    });
    self.selecte1=ko.pureComputed({
        read:function () {
            if(self.select3().length>0||self.select2().length>0){
                return true;
            }else{
                return false;
            }
        },
        write:function (value) {
            if(value){
                self.select2(true)
            }else{
                self.select2(false)

            }

        },
        owner:this
    });


    self.onOkBtnClick = function(){
        console.log(self.currentColor());
    }
    self.onCancelBtnClick = function () {

    }


}    return treetest();

});
