$(".about").click(function() {
  $('html, body').animate({
      scrollTop: $("/bluehentreats/#about").offset().top
  }, 500);
});