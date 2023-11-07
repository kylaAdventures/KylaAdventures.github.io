const navbar = document.getElementById("navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
  } else {
    navbar.style.opacity = "0";
    navbar.style.visibility = "hidden";
  }

  lastScroll = window.scrollY;
});
