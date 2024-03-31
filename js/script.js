function userScroll() {
  const navbar = document.querySelector(".navbar");
  const navbarToggleButton = navbar.querySelector("button.navbar-toggler");
  const navbarDropdown = navbar.querySelector("#navbarNavDropdown");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });

  navbarToggleButton.addEventListener("click", (e) => {
    if (!navbarDropdown.classList.contains("show")) {
      navbarDropdown.classList.add("show");
      navbar.classList.add("bg-dark");
    } else {
      if (window.scrollY <= 50) navbar.classList.remove("bg-dark");
      navbarDropdown.classList.remove("show");
    }
  });

  window.addEventListener;
}

document.addEventListener("DOMContentLoaded", userScroll);
