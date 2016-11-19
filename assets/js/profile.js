(function($){
  function formLabel(inputType){
    $(inputType).each(function(){
      var input = $(this).find("input, select");
      var label = $(this).find("label");
      // on focus add cladd active to label
      input.focus(function(){
        input.next().addClass("active");
        // console.log("focus");
      });
      //on blur check field and remove class if needed
      input.blur(function(){
        if(input.val() === '' || input.val() === 'blank'){
          label.removeClass();
        }
      });
    });
  }
  formLabel(".form-label");

  //submit button dirty validation 
  $("button[type='submit']").on("click" , function(){
    if( !$("input, select").val() ){ 
      $(this).text("Please enter all Fields");
    }else{
      $(".confirm").addClass("show");
    }
    return false;
  });

})(jQuery);


// var $wrap = $('.wrapper'),
//   $lEye = $('.eye'),
//   lFollowX = 0,
//   lFollowY = 0,
//   x = 0,
//   y = 0,
//   friction = 1 / 12;

// function animate() {
//   x += (lFollowX - x) * friction;
//   y += (lFollowY - y) * friction;

//   $lEye.css({
//     '-webit-transform': 'translate(' + -x + 'px, ' + -y + 'px)',
//     '-moz-transform': 'translate(' + -x + 'px, ' + -y + 'px)',
//     'transform': 'translate(' + -x + 'px, ' + -y + 'px)'
//   });

//   $wrap.css({
//     'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
//   });
//   window.requestAnimationFrame(animate);
// }

// $(window).on('mousemove click', function(e) {

//   var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//   var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//   lFollowX = (12 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//   lFollowY = (10 * lMouseY) / 100;

// });

// animate();
