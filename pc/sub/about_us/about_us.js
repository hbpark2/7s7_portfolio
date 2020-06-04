$(document).ready(function() {


            $(document).on("scroll", function(){
                
                var curScroll = $(document).scrollTop()
                
                if(curScroll>0){
                    $(".s2_txt").css({
                        opacity:1
                    })
                }
                
                if (curScroll >= 400) {
                    $("#s3").css({
                        opacity: 1,
                    })
                    return false
                }
                
            })
    
    

//            $(document).on("mousewheel", function() {
//
//                var currScroll = $(document).scrollTop()
//
//                console.log("aa : " + $(".s2_right").scrollTop())
//                console.log("aa : " + currScroll)
//
//                if (currScroll > 0) {
//                    $(".s2_span1").stop().animate({
//                        opacity: 1
//                    }, 1000)
//
//                    $(".s2_span2").stop().delay(250).animate({
//                        opacity: 0.7
//                    }, 1000)
//
//                    $(".s2_span3").stop().delay(500).animate({
//                        opacity: 0.5
//                    }, 1000)
//
//                }
//
//                if (currScroll >= 800) {
//                    $(".s3_left").stop().animate({
//                        opacity: 1,
//                        left: 0
//                    }, 1000)
//                }
//
//            })



        })