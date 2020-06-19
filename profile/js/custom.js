$(document).ready(function () {

    var el = document.querySelector('.main-text')
    var options = {
        text: '안 녕 하 세 요 ! \n 웹 ─ 퍼 블 리 셔 박 형 빈 의 \n 포 트 폴 리 오 페 이 지 입 니 다.',
        textSpeed: 110,
        blinkSpeed: 0.06
    }

    var instance = new tinytyper(el, options);

    //변수 ht에 브라우저의 높이값을 저장
    var ht = $(window).height();
    //브라우저의 높이값을 section의 높이값으로 지정
    $("section").height(ht);

    //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
    $(window).on("resize", function () {
        $("section").height(ht);
    });


    /*  주 메뉴 클릭시 자동으로 상하 스크롤 시키기  */

    //메뉴 버튼 클릭시
    $("#menu li").on("click", function (e) {
        e.preventDefault(); // a태그 기본속성 삭제


        //변수 i에 현재 클릭한 li의 순서값을 저장
        var i = $(this).index();

        //브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
        var nowTop = i * ht;

        //해당 스크롤 위치값으로 문서를 이동
        $("html,body").stop().animate({
            "scrollTop": nowTop
        }, 1400);
    });


    /*	화면이 스크롤 될때마다 현재 영역에 해당하는 메뉴 활성화하기 */

    $(window).on("scroll", function () {

        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop();
        // scroll이 0보다 크면 메뉴가 안보이는 조건문
        if (scroll > 0) {
            $("#menu").stop().animate({
                opacity: 1
            }, 500)
        } else {
            $("#menu").stop().animate({
                opacity: 0
            }, 500)
        }
        if (scroll > 4000 && scroll < 5000) {
            $("#menu a").css({
                color: '#fff'
            })
        } else {
            $("#menu a").css({
                color: '#333'
            })
        }
        for (var i = 0; i < 7; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $("#menu li").removeClass();
                $("#menu li").eq(i).addClass("on");
            };
        }


    });

    //인터넷익스플로러, 크롬, 사파리, 오페라, 엣지, 파이어폭스 / IE, Chrome, safari, Opera, Edge, Firefox
    $('section').on("mousewheel DOMMouseScroll", function (e) {
        var wheelData_c = e.originalEvent.wheelDelta
        var wheelData_f = e.originalEvent.detail
        //마우스 휠을 올렸을때	
        if (wheelData_c > 0 || wheelData_f < 0) {
            var $prev = $(this).prev().offset().top;
            //            console.log($prev)
            //문서 전체를 prev에 저장된 위치로 이동
            if ($(window).scrollTop() > 960) {
                $("html,body").stop().animate({
                    "scrollTop": $prev
                }, 300);
            }
            return false;

            //마우스 휠을 내렸을때	 
        } else if (wheelData_c < 0 && $(window).scrollTop() < 5000 || wheelData_f > 0) {

            //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
            var $next = $(this).next().offset().top;
            //문서 전체를 next에 저장된 위치로 이동

            $("html,body").stop().animate({
                "scrollTop": $next
            }, 300);
            return false;

        }

    });


});

