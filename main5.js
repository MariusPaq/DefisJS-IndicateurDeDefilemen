window.onscroll = function() { scrollIndicator() } ;

function scrollIndicator() {
  var bar = document.getElementById('bar');
  var pixelUp = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight;
  var heightIn = window.innerHeight;
  var calHeight = height-heightIn;
  var calScroll = pixelUp/calHeight*100;
  bar.style.width=calScroll+'%';
}
