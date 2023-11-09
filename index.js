const navbar = document.getElementById("navbar");

let lastScroll = 0;
let timeout;
window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (window.scrollY < lastScroll || scrollValue < 0.15) {
    clearTimeout(timeout);
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      navbar.style.opacity = "0";
      navbar.style.visibility = "hidden";
    }, 1000);
  }

  lastScroll = window.scrollY;
});
