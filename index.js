const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

const navbar = document.querySelector("nav");
let lastScroll = 0;
let timeout;

window.addEventListener("scroll", () => {
  const scrollValue =
    window.scrollY / (document.body.offsetHeight - window.innerHeight);

  if (window.scrollY < lastScroll || scrollValue < 0.2) {
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

// document.querySelectorAll("li").forEach(function (li) {
//   li.addEventListener("mouseover", function (event) {
//     li.style.cursor = "pointer";
//   });
//   li.addEventListener("mouseout", function (event) {
//     li.style.cursor = "";
//   });
//   li.addEventListener("click", function (event) {
//     const a = li.querySelector("a");
//     if (a) {
//       a.click();
//     }
//   });
// });

document.querySelectorAll("nav li").forEach(function (li) {
  li.addEventListener("mouseover", function (event) {
    li.style.cursor = "pointer";
  });
  li.addEventListener("mouseout", function (event) {
    li.style.cursor = "";
  });

  // Utilisez l'événement sur le <a> au lieu du <li>
  li.querySelector("a").addEventListener("click", function (event) {
    event.stopPropagation(); // Empêche la propagation de l'événement au parent (li)
  });

  li.addEventListener("click", function (event) {
    const a = li.querySelector("a");
    if (a) {
      // Vérifiez si la cible du clic est l'icône (fa-x-twitter)
      if (!event.target.classList.contains("fa-x-twitter")) {
        a.click();
      } else {
        // Gérez le clic sur l'icône ici (par exemple, ouvrir le lien dans une nouvelle fenêtre)
        window.open(a.getAttribute("href"), "_blank");
      }
    }
  });
});

// le carousel
// tableau d'images [0,1,2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});

// -------------test effet de fête-----------
// let h2 = document.querySelector("h2");
// let color = 0;

// function animate() {
//   color = (color + 1) % 360;
//   h2.style.color = "hsl(" + color + ", 100%, 50%)";
//   requestAnimationFrame(animate);
// }

// animate();
