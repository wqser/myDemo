/**
 * Created by wqs on 2016/11/7.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext','ojs/ojselectcombobox', 'ojs/ojcheckboxset'],function (oj,ko,$) {
    function formjetModel(){
        console.log("1"+"2");
        self=this;
        self.value=ko.observable("");
        self.val=ko.observable('red');
        self.isRequired = ko.observable(true);
        self.currentHobby=ko.observable([]);
       // self.che=ko.observable(false);
       /* self.currentHobby=ko.computed({
            read:self.che,
            write:function(){
                if(self.che==true){
                    return ko.observable(['swiming','gaming','reading','basketball']);
                }else{
                    return ko.observable([]);
                }
            },
            owner:self
        });*/
       self.che=ko.computed({
           read:function(){
               if(self.currentHobby().length==4){
                   return true;
               }else{
                 return false;
               }
           },
           write:function(value){
               if(value){
                   self.currentHobby(['swiming','gaming','reading','basketball']);
               }else{
                   self.currentHobby([]);
               }

           },

           owner:self
       });
    }

 return   formjetModel();
})