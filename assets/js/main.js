$('.scrollTo').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top-100
  }, 800);
  return false;
});


