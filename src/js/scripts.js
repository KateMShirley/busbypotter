(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var $homeClick=$('#home-scroll');
    var $page=$('html, body')
    console.log('hi');

    $homeClick.click(function(){
      $page.animate({
        scrollTop: $homeClick.offset().top
    }, 800);
  });
    });

})(jQuery, window, document);
