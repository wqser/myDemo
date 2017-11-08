/**
 * Created by wqs on 2016/11/7.
 */
define(['ojs/ojcore','knockout','jquery','ojs/ojknockout','ojs/ojbutton','ojs/ojmenu'],
    function(oj,ko,$) {
        function formModel() {
            $(function () {
              $("#color").change(function () {
                  var a=$("#color option:selected").text();
                  if(a=="青"){
                      $("#back").css('backgroundColor','green');
                  }
                  if(a=="品"){
                      $("#back").css('backgroundColor','red');
                  }
                  if(a=="黄"){
                      $("#back").css('backgroundColor','yellow');
                  }
                  if(a=="黑"){
                      $("#back").css('backgroundColor','black');
                  }
              })
            });
        }
        return formModel();
    })