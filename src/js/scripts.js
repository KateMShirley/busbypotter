(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var $homeClick=$('#home-scroll');
    var $page=$('html, body');

    var $formButton=$('.btn-services');


    $homeClick.click(function(){
      $page.animate({
        scrollTop: $homeClick.offset().top
    }, 800);
  });

  $formButton.click(function(e){
    console.log('form button click');
    e.preventDefault();
    $(this).toggleClass('btn-services-active');
  })
});

})(jQuery, window, document);
