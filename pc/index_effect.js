      $(document).ready(function(){


      var screenSize = $(window).width();
      var screenHeight = $(window).height();

      $("#content").css({
          marginTop:screenHeight
      })
              
       $(".product_ul ul").outerHeight( $(".t_box").height() )
       
       $(window).on('scroll', function(){
           
           console.log($(document).scrollTop())
           if($(document).scrollTop()>500){
                $(".nb_prd_wr").css({
                    opacity:1,
                    left:0
            
                })
               
           }
           if($(document).scrollTop()>1600){
                $(".prd_wrap").css({
                    opacity:1,
                    top:0
                })
               
           }
           if($(document).scrollTop()>3000){
                $("#s4 .tit").css({
                    opacity:1
                })
                $("#s4 p").css({
                    opacity:1
                })
               
           }
           if($(document).scrollTop()>3200){
                $(".product_ul").css({
                    opacity:1
                })
           }
           if($(document).scrollTop()>4500){
                $("#s5 .tit").css({
                    opacity:1
                })
                $(".news_box").css({
                    opacity:1,
                    left: 0
                })
               $(".go_board").css({
                    opacity:1,
                    left: 0
                })
               
               
               
           }


            
           
       })
          
          })