document.addEventListener('DOMContentLoaded', function () {
    const portfolioImages = document.querySelectorAll('.portfolio-img');
    
  

    portfolioImages.forEach(image => {
        image.addEventListener('click', function () {
          const imgModul = document.querySelector('#img-modul');
            this.classList.toggle('max-width');
          if (imgModul) {
            // Check if the element exists
            imgModul.remove(); // If it exists, remove it
        } else {
            // If it doesn't exist, create and append it
            const newElement = document.createElement('div');
            newElement.id = 'img-modul';
            document.body.appendChild(newElement);
        }
        });
    });

    const toggleButtons = document.querySelectorAll('.menu');
    const navItems = document.querySelector('#nav-items');

        

        toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            navItems.classList.toggle('nav-open');
        });
    });

});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}