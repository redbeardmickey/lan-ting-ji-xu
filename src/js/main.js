'use strict';

$(document).ready(function() {
  loadSvg('#lanting', 'lantingxu-01')
})

function loadSvg(selector, url) {
  var target = document.querySelector(selector);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url + ".svg", true);
    ajax.send();

    // Append the SVG to the target
    ajax.onload = function(e) {
      target.innerHTML = ajax.responseText;
      animate()
    }
  } else {
    // Fallback to png
    target.innerHTML = "<img src='" + url + ".png' />";
  }
}

function animate() {
  // console.log('ani')
  anime({
    targets: 'path',
    opacity: [0.1, 1],
    delay: function(el, i) {
      return 750 + (i * 10)
    },
    duration: 1400,
    // loop: true,
    // direction: 'alternate',
    easing: 'easeInOutExpo'
  });
}
