(function ($) {
"use strict";

 $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  //preloader
     $('.ud_dots').delay(3000).fadeOut(300, function () {
            $('#ud_bg_left').animate({
                left: '-50%'
            }, 300);
            $('#ud_bg_right').animate({
                right: '-50%'
            }, 300, function () {
                $('#ud_preloader').fadeOut(10);
            });
        });

})(jQuery);	