$(document).ready(function () {
    $("#btn1").toggle(function() {
            $(".searchbox").fadeIn('slow');

        }, function() {
            $(".searchbox").fadeOut('fast');

        });

    $(".btn").click(function () { //메뉴버튼 클릭시

        var documentHeight = $(document).height();
        //실제 페이지의 높이 = $(document).height();
        $(".box").css('height', documentHeight);
        $("nav").css('height', documentHeight);
        //반투명박스와 네비의 높이를 실제 페이지의 높이로 바꾸어라   

        $("nav").animate({
            right: 0,
            opacity: 1
        }, 'slow');
        $(".box").show();
        $('.mBtn').css({
            transition: '.5s',
            transform: 'rotate(-90deg)'
        }, 500)
    });

    $(".box,.mclose").click(function () { //닫기버튼 클릭시
        $("nav").animate({
            right: '-100%',
            opacity: 0
        }, 'fast');
        $(".box").hide();
        $('.mBtn').css({
            transition: '.5s',
            transform: 'rotate(0deg)'
        }, 500)
    });


    //2depth 메뉴 교대로 열기 처리 

    var onoff=[false,false,false,false];
    var arrcount=onoff.length;
    console.log(arrcount);
    $('nav .depth1>h3>a').click(function(){
        var ind=$(this).parents('.depth1').index();
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parent('h3').next('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;   
            
       }else{
         $(this).parent('h3').next('ul').slideUp('fast'); 
         onoff[ind]=false;   
       }
    });    
});


$(document).ready(function () {
    //offset().top;
    //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        var boxHeight = $('.visual').height();

        //스크롤top의 좌표를 담는다
        if (scroll > boxHeight) {
            $('#headerArea').addClass('headerScroll');
            $('.searchbox').addClass('searchboxScroll');
             $('#headerArea > .topBtn').fadeIn()
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
        } else {
            $('#headerArea').removeClass('headerScroll');
            $('.searchbox').removeClass('searchboxScroll');
            $('#headerArea > .topBtn').fadeOut()
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
        }
        
        
    });
 

});

//    $(function(){
//      SyntaxHighlighter.all();
//    });
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});
