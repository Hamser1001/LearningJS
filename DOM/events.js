/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

 let myButton = document.getElementById("btn");

 myButton.onmouseleave = function () {
    console.log("Clicked");
 };

 window.onscroll = function () {
    console.log("scroll");
 };

 window.onresize = function () {
    console.log("resize");
 };