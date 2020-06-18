  $(document).ready(function () {
      
      var screenSize = $(window).width();
      var screenHeight = $(window).height();
      var current = false;
      
      $("#content").css('margin-top', screenHeight);

      $("#mBtn").toggle(function () {
          $("nav").slideDown('slow');
      }, function () {
          $("nav").slideUp('fast');
      });

      


      if (screenSize > 768) {
          $("#videoBG").show();
          $("#imgBG").hide();
      }
      if (screenSize <= 768) {
          $("#videoBG").hide();
          $("#videoBG").attr('src', '');
          $("#imgBG").show();
      }
      $(".cast>ul>li").children("span").height($(".cast_left>li").height())
      $(".cast>ul>li").children("span").width($(".cast_left>li").width())
      //                        $(".cast_left>li").children("span").css({backgroundColor:"#fff",top: pos} )
      $(".cast>ul>li").hover(
          function () {
              $(this).children(".cast_bg").addClass("cast_bghover")
              $(this).children(".cast_bg").css({
                  transform: 'scale(0.9)'
              })
          },
          function () {
              $(this).children(".cast_bg").removeClass("cast_bghover")
              $(this).children(".cast_bg").css({
                  transform: 'scale(1)'
              })
          }

      )

      $(window).resize(function () {

          var subMenu = 0; 
          // 가정법 : 임의로 값을 정하고 (0,1)
          // 0 -> 서브메뉴가 열려있을 때
          // 1 -> 서브메뉴가 닫혀있을 때

          var screenSize = $(window).width();
          if (screenSize > 640) {
              $("nav").show();
              subMenu = 1;
          }
          if (subMenu == 1 && screenSize < 640) {
              $("nav").hide();
              subMenu = 0;
          }

          $("#content").css('margin-top', screenHeight);

          if (screenSize > 768 && current == false) {

              $("#videoBG").show();
              $("#videoBG").attr('src', 'images/video/video_2.mp4');
              $("#imgBG").hide();
              current = true;
          }
          if (screenSize <= 768) {
              $("#videoBG").hide();
              $("#videoBG").attr('src', '');
              $("#imgBG").show();
              current = false;
          }

      });

      $('.down').click(function () {
          var screenHeight = $(window).height();
          $('html,body').animate({
              'scrollTop': screenHeight
          }, 1000);
      });



      var screenHeight = $(window).height();
      var screenSize = $(window).width();

      $(window).on('scroll', function () {
          //          console.log($(document).scrollTop())

          if ($(document).scrollTop() > screenHeight) {
              $("#headerArea").css({
                  backgroundColor: '#000'
              })
              $(".top_btn").css({
                  opacity: 1
              })
          }

          if (screenSize > 1024) {

              if ($(document).scrollTop() > 800) {
                  //900
                  $(".intro_box").css({
                      opacity: 1
                  })
              }
              //cast_img 샤라락
              for (i = 1; i < 7; i++) {

                  if ($(document).scrollTop() > 1600) {
                      $(".cast>ul>li:nth-of-type(" + i + ")").delay(i * 150).animate({
                          opacity: 1
                      }, 1000)

                  }

              }
              //gallery 슝슝
              if ($(document).scrollTop() > 2600) {
                  $(".gallery_top,.gallery_top+p").delay(300).animate({
                      opacity: 1,
                      left: 0
                  }, 700)


              }
              if ($(document).scrollTop() > 2900) {

                  $(".gallery_bottom,.gallery_bottom+p").delay(500).animate({
                      opacity: 1,
                      right: 0
                  }, 700)

              }

          }

          if (screenSize <= 1024) {
              if ($(document).scrollTop() > 700) {
                  //900
                  $(".intro_box").css({
                      opacity: 1
                  })
              }
              //cast_img 샤라락
              for (i = 1; i < 7; i++) {

                  if ($(document).scrollTop() > 1400) {
                      $(".cast>ul>li:nth-of-type(" + i + ")").delay(i * 150).animate({
                          opacity: 1
                      }, 1000)
                      $(".last_cast").delay(700).animate({
                          opacity: 0.8
                      }, 1000)

                  }

              }
              //gallery 슝슝
              if ($(document).scrollTop() > 2000) {
                  $(".gallery_top,.gallery_top+p").delay(300).animate({
                      opacity: 1,
                      left: 0
                  }, 700)


              }
              if ($(document).scrollTop() > 2200) {

                  $(".gallery_bottom,.gallery_bottom+p").delay(500).animate({
                      opacity: 1,
                      right: 0
                  }, 700)

              }

          }




          //partners 위아래가운데정렬
          for (var i = 1; i < 6; i++) {

              var wid_1 = $('.view>ul:nth-of-type(1)>li:nth-of-type(' + i + ')>img').width()
              var hei_1 = $('.view>ul:nth-of-type(1)>li:nth-of-type(' + i + ')>img').height()
              $('.view>ul:nth-of-type(1)>li:nth-of-type(' + i + ')>img').css({
                  marginLeft: -wid_1 / 2,
                  marginTop: -hei_1 / 2
              })
              var wid_2 = $('.view>ul:nth-of-type(2)>li:nth-of-type(' + i + ')>img').width()
              var hei_2 = $('.view>ul:nth-of-type(2)>li:nth-of-type(' + i + ')>img').height()
              $('.view>ul:nth-of-type(2)>li:nth-of-type(' + i + ')>img').css({
                  marginLeft: -wid_2 / 2,
                  marginTop: -hei_2 / 2
              })
              var wid_3 = $('.view>ul:nth-of-type(3)>li:nth-of-type(' + i + ')>img').width()
              var hei_3 = $('.view>ul:nth-of-type(3)>li:nth-of-type(' + i + ')>img').height()
              $('.view>ul:nth-of-type(3)>li:nth-of-type(' + i + ')>img').css({
                  marginLeft: -wid_3 / 2,
                  marginTop: -hei_3 / 2
              })

          }



      })





  });
