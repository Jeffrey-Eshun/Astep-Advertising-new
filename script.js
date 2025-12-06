
//   const currentLocation = window.location.pathname;
//   const menuItems = document.querySelectorAll(".nav-link");

//   menuItems.forEach(item => {
//     if (item.getAttribute("href") === currentLocation) {
//       item.classList.add("active");
//     }
//   });

 const currentPage = window.location.pathname;
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });


// Image Slider
let currentHero = 0;
const heroSlides = document.querySelectorAll(".hero-slide");

function changeHero(direction) {
  heroSlides[currentHero].classList.remove("active");

  currentHero += direction;

  if (currentHero < 0) currentHero = heroSlides.length - 1;
  if (currentHero >= heroSlides.length) currentHero = 0;

  heroSlides[currentHero].classList.add("active");
}









