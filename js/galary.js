/*
Took from this pen: https://codepen.io/ImBobby/pen/uKbnl

3D images gallery. inspired from David DeSandro's tutorial

(http://24ways.org/2010/intro-to-css-3d-transforms)

*/


$(document).ready(function(){
  $('figure').hover(function(){
  //console.log($(this).css('transform'))
   // console.log(new WebKitCSSMatrix($(this).css('transform')));
   var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
         var c = values[0];
        var d = values[1];
    console.log(window.getComputedStyle(this).getPropertyValue("transform"));
    
});
  console.log($('figure'));
});