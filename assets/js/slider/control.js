(function ($) {
  'use strict';

  $(document).ready(function () {

      var owl = $("#owl-slider");

      owl.owlCarousel({
      scrollPerPage : true,
      items : 7,
      itemsDesktop : [1000,5],
      itemsDesktopSmall : [900,3],
      itemsTablet: [768,2],
      itemsMobile: [320,1],

      afterAction : controlForMobile
      
      });

      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      // $(".play").click(function(){
      //   owl.trigger('owl.play',1000);
      // })
      // $(".stop").click(function(){
      //   owl.trigger('owl.stop');
      // })

      function controlForMobile(){
        var allItems, visibleItems, totalSet, getTotalWeek, $controlParent;
          allItems = this.owl.owlItems.length;
          visibleItems = this.owl.visibleItems.length;
          $controlParent = $('#ctrl-slider');

          getTotalWeek = $controlParent.children('span')[2];

          totalSet = Math.ceil( allItems / visibleItems );
          getTotalWeek.innerText = totalSet;

          $controlParent.children('span').eq(1).text( Math.floor((this.owl.currentItem-1) / visibleItems) +2 );
      }

  });

}(jQuery));


