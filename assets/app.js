var btn = $('#goTop');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '0');
});
      
history.pushState(null, null, location.href);
window.onpopstate = () => {
  history.go(1)
}