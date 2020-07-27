var slides = document.getElementsByClassName("mySlides");
var myIndex = 0;
autoSlides();

function autoSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = "block";
  setTimeout(autoSlides, 4000);
}
