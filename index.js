const navbar = document.getElementById("navbar");

let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY < lastScroll) {
//     navbar.style.opacity = "1";
//     navbar.style.visibility = "visible";
//   } else {
//     navbar.style.opacity = "0";
//     navbar.style.visibility = "hidden";
//   }

//   lastScroll = window.scrollY;
// });

let timeout;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    clearTimeout(timeout);
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
  } else {
    clearTimeout(timeout); // annuler le délai précédent
    timeout = setTimeout(() => {
      navbar.style.opacity = "0";
      navbar.style.visibility = "hidden";
    }, 1000); // 3000 ms = 3 s
  }

  lastScroll = window.scrollY;
});
