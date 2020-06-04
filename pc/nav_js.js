   $(document).ready(function () {

       $('ul.dropdownmenu').hover(
           function () {
               $('ul.dropdownmenu li.menu ul').fadeIn('normal', function () {
                   $(this).stop();
               });
               $('header').animate({
                   height: 300
               }, 'fast').clearQueue();
           },
           function () {

               $('ul.dropdownmenu li.menu ul').fadeOut('fast');
               $('header').animate({
                   height: 150
               }, 'fast').clearQueue();

           });
       $('header').hover(
           function () {
                $('header').css({backgroundColor:'rgba(252, 250, 232, 0.7)'})
           },
           function () {
                $('header').css({backgroundColor:'rgba(252, 250, 232, 0.1)'})

           });

       //접근성을 위한 tab 처리
       $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
           $('ul.dropdownmenu li.menu ul').slideDown('fast');
           $('header').animate({
               height: 300
           }, 'fast').clearQueue();
           
       });

       $('ul.dropdownmenu li:last').find('a').on('blur', function () {
           $('ul.dropdownmenu li.menu ul').slideUp('fast');
           $('header').animate({
               height: 150
           }, 'fast').clearQueue();
       });

      

       
       
       
       
   });
