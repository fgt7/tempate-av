var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

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
      
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Tanggal " + d + "/" + m + "/" + y;

history.pushState(null, null, location.href);
window.onpopstate = () => {
  history.go(1)
}

