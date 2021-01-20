$(document).ready(function(){
  if($(window).width() > 1000)
  {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-149px";
    }
      prevScrollpos = currentScrollPos;
    }
  }
  else {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {        document.getElementById("nav").style.top = "-199px";
    }
      prevScrollpos = currentScrollPos;
    }
  }
});

$(window).resize(function(){
  if($(window).width() > 1000)
  {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-149px";
    }
      prevScrollpos = currentScrollPos;
    }
  }
  else {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-199px";
    }
      prevScrollpos = currentScrollPos;
    }
  }
});
