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
  $('html, body').animate({scrollTop:0}, '300');
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

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
      } 
  });
}); 

   
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6w7533jPj_886a8pPF6wTSHxr4_AoCdLgDTdrz1JZcQhQMtA/exec';
const form = document.forms['ruang-imajinasi-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
    