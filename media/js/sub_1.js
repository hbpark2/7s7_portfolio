  $(document).ready(function () {
      
      
      $("#mBtn").toggle(function() {
                $("nav").slideDown('slow');
            }, function() {
                $("nav").slideUp('fast');
            });

            //********************************이게중요함******************************// 

            var current = 0;    // 가정법 : 임의로 값을 정하고 (0,1)
                                    // 0 -> 서브메뉴가 열려있을 때
                                    // 1 -> 서브메뉴가 닫혀있을 때
                                        
            
            $(window).resize(function() {
                var screenSize = $(window).width();
                if (screenSize > 640) {
                    $("nav").show();
                    current = 1;
                }
                if (current == 1 && screenSize < 640) {
                    $("nav").hide();
                    current = 0;
                }
            });
      

      
      var screenSize = $(window).width();
      var screenHeight = $(window).height();
      var headerHeight = $("#headerArea").height()
      var current = false;

      $("#content").css('margin-top', screenHeight);

     
      $('.down').click(function () {
          var screenHeight = $(window).height();
          $('html,body').animate({
              'scrollTop': screenHeight - headerHeight
          }, 1000);
      });


  })