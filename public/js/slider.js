//chiamata delle classi degli slider per lo show e il setting della variabile delle pagine
var slideIndex = 1;
showSlides(slideIndex, 'SlidesH');
showSlides(slideIndex, 'SlidesIp');
showSlides(slideIndex, 'SlidesIs');

//funzione chiamata dai bottoni degli slider
function plusSlides(n, slideId) {
  showSlides(slideIndex += n, slideId);
}

//funzione per lo scorrimento degli slider
function showSlides(n, slideId) {
  var i;
  var slides = document.getElementsByClassName(slideId);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
