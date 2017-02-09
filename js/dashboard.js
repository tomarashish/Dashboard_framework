$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});

//https://tympanus.net/Development/DragDropInteractions/icons.html
/*var options = {
    animate: true,
    disableResize: false,
    disableDrag: false,
  cell_width:20,
    resizable: {
      handles: 'e, w'
    }
  };

$('.grid-stack').gridstack(options);
*/
// use data-gs-id to get the change in data-gs-x and data-gs-y. Apply the change to adjacent grid to change the width in a responsive  way

//set the min and max height of grid 
// data-gs-min-width="1" data-gs-max-width="9" data-gs-min-height="1" data-gs-max-height="4" data-gs-id="1"
