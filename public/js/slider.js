var slideIndex = 1;
showSlides(slideIndex, 'SlidesH');
showSlides(slideIndex, 'SlidesIp');
showSlides(slideIndex, 'SlidesIs');

// Next/previous controls
function plusSlides(n, slideId) {
  showSlides(slideIndex += n, slideId);
}


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
