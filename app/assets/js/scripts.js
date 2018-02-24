/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
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

  $('#accordion').find('.accordion-toggle').click(function(){
     //Expand or collapse this panel
     $(this).next().slideToggle('ease-out');
     //Hide the other panels
     $(".accordion-content").not($(this).next()).slideUp('ease-out');

   });
});

})(jQuery, window, document);
