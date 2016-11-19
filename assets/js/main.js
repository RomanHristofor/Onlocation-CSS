(function ($) {
  'use strict';

  $(document).ready(function () {

    function blueasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
    }
    blueasyMenu();

    function randomInteger(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }

    var totalGames = (function(){
      var items, div, i,j, arrClass, rand;
          items = document.getElementsByClassName('total-games');
          arrClass = [ 'draw', 'winner', 'loser' ];

          for(i = 0; i < items.length; i++) {
            for (j = 8; j > 0; j--) {
              div = document.createElement("div");
              rand = randomInteger( 0, 2 );
              div.setAttribute("class", arrClass[rand] );
              items[i].appendChild( div );
            }
          }
    })();
    // hover-effect main img for IOS 
    $(".hidden-description").hover(function(){
      $(this).addClass('visible');
    }, function(){
      $(this).removeClass('visible');
    });


  }); //end ready

}(jQuery));

