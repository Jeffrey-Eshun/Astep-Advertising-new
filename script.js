
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





