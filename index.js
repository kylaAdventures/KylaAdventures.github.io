// const navbar = document.getElementById("navbar");

// let lastScroll = 0;
// let timeout;
// window.addEventListener("scroll", () => {
//   let scrollValue =
//     (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//   if (window.scrollY < lastScroll || scrollValue < 0.2) {
//     clearTimeout(timeout);
//     navbar.style.opacity = "1";
//     navbar.style.visibility = "visible";
//   } else {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       navbar.style.opacity = "0";
//       navbar.style.visibility = "hidden";
//     }, 1000);
//   }

//   lastScroll = window.scrollY;
// });

const navbar = document.getElementById("navbar");
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

document.querySelectorAll("li").forEach(function (li) {
  li.addEventListener("mouseover", function (event) {
    li.style.cursor = "pointer";
  });
  li.addEventListener("mouseout", function (event) {
    li.style.cursor = "";
  });
  li.addEventListener("click", function (event) {
    const a = li.querySelector("a");
    if (a) {
      a.click();
    }
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
