
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


//SLIDE

  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero-slide");
  const slideInterval = 4000; // 4 seconds

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function changeHero(direction) {
    showSlide(currentSlide + direction);
    resetAutoSlide();
  }

  function autoSlide() {
    showSlide(currentSlide + 1);
  }

  let autoSlideTimer = setInterval(autoSlide, slideInterval);

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSlide, slideInterval);
  }











