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
  "KitchenImage01.webp",
  "KitchenImage02.webp",
  "KitchenImage03.webp",
  "KitchenImage04.webp",
  "KitchenImage05.webp",
  "KitchenImage06.webp",
  "KitchenImage07.webp",
  "KitchenImage08.webp",
  "KitchenImage09.webp",
  "KitchenImage10.webp",
  "KitchenImage11.webp",
  "KitchenImage12.webp",
  "KitchenImage13.webp",
  "KitchenImage14.webp",
  "KitchenImage15.webp",
  "KitchenImage16.webp",
  "KitchenImage17.webp",
  "KitchenImage18.webp",
  "KitchenImage19.webp",
  "KitchenImage20.webp",
  "KitchenImage21.webp",
  "KitchenImage22.webp",
  "KitchenImage23.webp",
  "KitchenImage24.webp",
  "KitchenImage25.webp",
  "KitchenImage26.webp",
  "KitchenImage27.webp",
  "KitchenImage28.webp",
  "KitchenImage29.webp",
  "KitchenImage30.webp",
];

// Array of images for the second category
const category2Images = [
  "BathroomImage01.webp",
  "BathroomImage02.webp",
  "BathroomImage03.webp",
  "BathroomImage04.webp",
  "BathroomImage05.webp",
  "BathroomImage06.webp",
  "BathroomImage07.webp",
  "BathroomImage08.webp",
  "BathroomImage09.webp",
  "BathroomImage10.webp",
  "BathroomImage11.webp",
  "BathroomImage12.webp",
  "BathroomImage13.webp",
  "BathroomImage14.webp",
  "BathroomImage15.webp",
  "BathroomImage16.webp",
  "BathroomImage17.webp",
  "BathroomImage18.webp",
  "BathroomImage19.webp",
  "BathroomImage20.webp",
  "BathroomImage21.webp",
  "BathroomImage22.webp",
  "BathroomImage23.webp",
];

// Array of images for the third category
const category3Images = [
  "OtherImage01.webp",
  "OtherImage02.webp",
  "OtherImage03.webp",
  "OtherImage04.webp",
  "OtherImage05.webp",
  "OtherImage06.webp",
  "OtherImage07.webp",
  "OtherImage08.webp",
  "OtherImage09.webp",
  "OtherImage10.webp",
  "OtherImage11.webp",
  "OtherImage12.webp",
];
const slidesContainer = document.getElementById("slidesContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentCategory = category1Images;
let currentIndex = 1;
let previousIndex = 0;
let nextIndex = 2;

function showSlides() {
  slidesContainer.innerHTML = `<img src="portfolio-imgs/${currentCategory[previousIndex]} "alt="Service by Kitchens & Bathrooms" onclick="modul('#image-1')" id="image-1"><img src="portfolio-imgs/${currentCategory[nextIndex]}" alt="Service by Kitchens & Bathrooms" onclick="modul('#image-2')" id="image-2"><img src="portfolio-imgs/${currentCategory[currentIndex]}" alt="Service by Kitchens & Bathrooms" onclick="modul('#image-3')" id="image-3">`;
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
