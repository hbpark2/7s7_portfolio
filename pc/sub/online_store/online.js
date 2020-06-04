$(document).ready(function(){
    
    $(window).scroll(function(){
        for(var i =0; i<6; i++){
        
        var delay = ""
        
        if(i>=0 && i<2){
            delay = "0"
        }else if(i>=2 && i<4){
            delay = "1s"
        }else if(i>=4 && i<6){
            delay = "1.5s"
        }

        $(".prd_wrapper>a:eq("+i+")").css({
            opacity:1,transitionDelay: delay
        })
        
        
    }
    })
    
})