 



$(document).ready(function(){
    

var castwidth = $('#content>ul>li').width()

 $('#content>ul>li').height(castwidth + 20)


 $(window).resize(function () {


     var castwidth = $('#content>ul>li').width()

     $('#content>ul>li').height(castwidth + 20)



 });
})