function userScroll() {
  const navbar = document.querySelector(".navbar");
  const navbarToggleButton = navbar.querySelector("button.navbar-toggler");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });

  window.addEventListener("click", () => {
    navbar.classList.toggle("bg-dark");
  });

  window.addEventListener;
}

document.addEventListener("DOMContentLoaded", userScroll);
