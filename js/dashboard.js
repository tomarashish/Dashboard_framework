//https://tympanus.net/Development/DragDropInteractions/icons.html

// use data-gs-id to get the change in data-gs-x and data-gs-y. Apply the change to adjacent grid to change the width in a responsive  way

//set the min and max height of grid 
// data-gs-min-width="1" data-gs-max-width="9" data-gs-min-height="1" data-gs-max-height="4" data-gs-id="1"

//variable for grid
var x = 0,
  y = 0;

$(document).ready(function () {

  $('#sunburst').click(function () {
    createGridStack("sunbusrt");
  });

  $('#treemap').click(function () {
    createGridStack("treemap");
  });

});

function createGridStack(chartName) {

  var i = 1;
   var gridStack;
                  
  //creating dynamic div element
  //if("x" == 0){
      gridStack = document.createElement('div');
      gridStack.className = 'grid-stack';
      gridStack.id = "chartContainer"
  //}
                  
  var gridItem = document.createElement('div'),
    itemContent = document.createElement('div'),
    panelHeading = document.createElement('div'),
    panelBody = document.createElement('div');

  
  gridItem.className = 'grid-stack-item';
  itemContent.className = 'grid-stack-item-content panel panel-info';
  panelHeading.className = 'panel-heading';
  panelBody.className = 'panel-body';

  gridItem.id = "chartName" + i;      
  i = i + 1;   
    
  gridItem.setAttribute("data-gs-height","6");
  gridItem.setAttribute("data-gs-width","6");
  gridItem.setAttribute("data-gs-x","0");
  gridItem.setAttribute("data-gs-y","0");
  
  panelHeading.innerHTML += '<h3 class="panel-title"><i class="fa fa-pie-chart"></i> "'+chartName+'"</h3>'
  panelBody.innerHTML += '<p style="text-align:center;"> "'+chartName+'"</p>'
  
  itemContent.appendChild(panelHeading);
  itemContent.appendChild(panelBody);
  
  gridItem.appendChild(itemContent);
  gridStack.appendChild(gridItem);
  
  var pageWrapper = document.getElementById('page-content-wrapper');
      pageWrapper.appendChild(gridStack);
  
}



// variable to define custom grdistack behavior 
var options = {
  animate: true,
  disableResize: false,
  disableDrag: false,
  resizable: {
    handles: 'e, w'
  }
};

// using options variable to change gridstack behavior
$('.grid-stack').gridstack(options);



$(document).ready(function () {
  var trigger = $('.hamburger'),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
});