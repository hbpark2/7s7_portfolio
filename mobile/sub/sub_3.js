$(document).ready(function () {


    var boxHeight = $('.sub_nav').offset().top;
    var aHeight = $('.all_prd').offset().top - 300;
    var nbHeight = $('.nb_prd').offset().top - 300;
    var mdHeight = $('.md_prd').offset().top - 250;
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        console.log(boxHeight)
        //스크롤top의 좌표를 담는다

        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        $('.sub_nav>li>a').removeClass('changeColor')
        //***************이게다임********************//
        if (scroll > boxHeight) {
            $('.sub_nav').addClass('sub_nav_on');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
        } else if (scroll < boxHeight) {
            $('.sub_nav').removeClass('sub_nav_on');

            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
        }

        if (scroll > aHeight && scroll < nbHeight) {
            $('.sub_nav>li:nth-child(1)>a').addClass('changeColor')
        } else if (scroll > nbHeight && scroll < mdHeight) {
            $('.sub_nav>li:nth-child(2)>a').addClass('changeColor')
        } else if (scroll > mdHeight) {
            $('.sub_nav>li:nth-child(3)>a').addClass('changeColor')

        }

    })
    var aHeight = $('.all_prd').offset().top - 300;
    var nbHeight = $('.nb_prd').offset().top - 300;
    var mdHeight = $('.md_prd').offset().top - 250;
    $('.sub_nav>li:nth-child(1)>a').on('click', function () {
        $(window).scrollTop() == aHeight
    })
    $('.sub_nav>li:nth-child(2)>a').on('click', function () {
        $(window).scrollTop() == nbHeight
    })
    $('.sub_nav>li:nth-child(3)>a').on('click', function () {
        $(window).scrollTop() == mdHeight
    })
})
