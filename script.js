document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".menu");
  const navItems = document.querySelector("#nav-items");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      navItems.classList.toggle("nav-open");
    });
  });
});

const category1Images = [
  "portfolio-imgs/IMG_1640_result_result.webp",
  "portfolio-imgs/IMG_2113_result_result.webp",
  "portfolio-imgs/IMG_2123_result_result.webp",
  "portfolio-imgs/IMG_2157_result_result.webp",
  "portfolio-imgs/IMG_2164_result_result.webp",
  "portfolio-imgs/IMG_2168_result_result.webp",
  "portfolio-imgs/IMG_3466_result_result.webp",
  "portfolio-imgs/IMG_3863_result_result.webp",
  "portfolio-imgs/IMG_4189_result_result.webp",
  "portfolio-imgs/IMG_4205_result_result.webp",
  "portfolio-imgs/IMG_8876_result_result.webp",
  "portfolio-imgs/IMG_8879_result_result.webp",
  "portfolio-imgs/IMG_9951_result_result.webp",
  "portfolio-imgs/IMG_9953_result_result.webp",
  "portfolio-imgs/IMG_9955_result_result.webp",
  "portfolio-imgs/IMG_0459_result_result.webp",
  "portfolio-imgs/IMG_0507_result_result.webp",
  "portfolio-imgs/IMG_1020_result_result.webp",
];

// Array of images for the second category
const category2Images = [
  "portfolio-imgs/IMG_1684_result.webp",
  "portfolio-imgs/IMG_2179_result.webp",
  "portfolio-imgs/IMG_4111_result.webp",
  "portfolio-imgs/IMG_4182_result.webp",
  "portfolio-imgs/IMG_8031_result.webp",
  "portfolio-imgs/IMG_8042_result.webp",
  "portfolio-imgs/IMG_0269_result.webp",
  "portfolio-imgs/IMG_0278_result.webp",
  "portfolio-imgs/IMG_0290_result.webp",
  "portfolio-imgs/IMG_0824_result.webp",
  "portfolio-imgs/IMG_0825_result.webp",
  "portfolio-imgs/IMG_1127_result.webp",
  "portfolio-imgs/IMG_1652_result.webp",
  "portfolio-imgs/IMG_1656_result.webp",
];

// Array of images for the third category
const category3Images = [
  "portfolio-imgs/Image11.webp",
  "portfolio-imgs/Image12.webp",
  "portfolio-imgs/Image13.webp",
  "portfolio-imgs/Image14.webp",
  "portfolio-imgs/Image15.webp",
  "portfolio-imgs/Image01.webp",
  "portfolio-imgs/Image02.webp",
  "portfolio-imgs/Image03.webp",
  "portfolio-imgs/Image04.webp",
  "portfolio-imgs/Image05.webp",
  "portfolio-imgs/Image06.webp",
  "portfolio-imgs/Image07.webp",
  "portfolio-imgs/Image08.webp",
  "portfolio-imgs/Image09.webp",
  "portfolio-imgs/Image10.webp",
];
const slidesContainer = document.getElementById("slidesContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentCategory = category1Images;
let currentIndex = 1;
let previousIndex = 0;
let nextIndex = 2;

function showSlides() {
  slidesContainer.innerHTML = `<img src="${currentCategory[previousIndex]} "alt="Service by Kitchens & Bathrooms" onclick="modul('#image-1')" id="image-1"><img src="${currentCategory[nextIndex]}" alt="Service by Kitchens & Bathrooms" onclick="modul('#image-2')" id="image-2"><img src="${currentCategory[currentIndex]}" alt="Service by Kitchens & Bathrooms" onclick="modul('#image-3')" id="image-3">`;
}

function changeSlide(n) {
  currentIndex += n;
  previousIndex += n;
  nextIndex += n;
  if (nextIndex >= currentCategory.length) {
    nextIndex = 0;
  } else if (nextIndex < 0) {
    nextIndex = currentCategory.length - 1;
  }
  if (previousIndex >= currentCategory.length) {
    previousIndex = 0;
  } else if (previousIndex < 0) {
    previousIndex = currentCategory.length - 1;
  }
  if (currentIndex >= currentCategory.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = currentCategory.length - 1;
  }
  showSlides();
}

function changeCategory(newCategory) {
  currentCategory = newCategory;
  currentIndex = 1;
  previousIndex = 0;
  nextIndex = 2;
  showSlides();
}

showSlides();

const buttons = document.querySelectorAll(".category-btn");
currentButtonIndex = 0;

function buttonColor(index) {
  buttons[currentButtonIndex].style.boxShadow = "2px 2px black";
  currentButtonIndex = index;
  buttons[currentButtonIndex].style.boxShadow = "0 0 black";
}

function preloadImages(array) {
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.src = array[i];
  }
}

window.onload = preloadImages(category1Images);
window.onload = preloadImages(category2Images);
window.onload = preloadImages(category3Images);

function modul(image) {
  const select = document.querySelector(image);
  const background = document.querySelector("#background");
  background.classList.toggle("display-none");

  select.classList.toggle("modul");

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const imageAspectRatio = select.naturalWidth / select.naturalHeight;

  if (viewportWidth / viewportHeight > imageAspectRatio) {
    // If the viewport is wider than the image, set the width to 90vw

    select.classList.toggle("tall");
  } else {
    // If the viewport is taller than the image, set the height to 90vh

    select.classList.toggle("wide");
  }
}
