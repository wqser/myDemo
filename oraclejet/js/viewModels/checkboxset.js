/**
 * Created by wqs on 2016/11/4.
 */
define(['ojs/ojcore','knockout','jquery','ojs/ojknockout','ojs/ojbutton'],
    function(oj,ko,$){
        function buttonModel(){
            this.formats=ko.observableArray(['bold','underline']);

            this.bold=ko.computed({
                read:function(){
                    return this.formats.indexOf('bold')>-1;
                },
                write:function(value){
                    var index=this.formats.indexOf('bold');
                    if(!value && index>-1){
                        this.formats.splice(index,1);

                    }else if(value && index == -1){
                        this.formats.push('bold');
                    }
                },
                owner:this
            });
            this.classes=ko.computed(function(){
                return this.formats().join(" ");
            },this);
            this.formattedText=ko.computed(function(){
                return this.bold() ? "this text is bold" : 'this text is NOT bold';


            },this);
            this.toggleAll=function(){
                var allChecked=this.formats().length==3;
                this.formats(allChecked?[]:['bold','italic','underline']);
            }
            this.toggleBold=function(){
                this.bold(!this.bold());
            }
            this.handleFormatChange=function(event,ui) {
                if (ui.option === "checked") {

                }
            }
        }

        return buttonModel;
    })