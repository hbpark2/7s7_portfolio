$(document).ready(function () {


    $(".decide > li").hover(function () {

        var nn = $(".decide > li").index($(this))

        $(this).addClass("sp" + nn)

    }, function () {

        var nn = $(".decide > li").index($(this))

        $(this).removeClass("sp" + nn)

    })


})
var desExChk = true;
    function desEx(){
        var hh = 0;
        var dh = 50
        var ro = "rotate(0deg)"
        if(desExChk){
            hh = 1;
            dh = 370
            ro = "rotate(90deg)"
        }
        
        $("#tx_box").css('opacity',hh)
        $(".detail_guide").stop().animate({height:dh},500)
        $("#tx_box").css({
            height:dh
        })
        
        $("#desExBtn>.fas").css({
            transform: ro
        },500)
        
        desExChk = !desExChk
        
    }