// Need a function that get rids of preloader

window.addEventListener('load', function(){
   const preload = document.querySelector('.preload');
   preload.classList.add('preload-finish');
});