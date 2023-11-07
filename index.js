// const sidebar = document.getElementById("side-bar");
// const content = document.querySelector(".content");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
// });
// content.addEventListener("click", () => {
//   sidebar.classList.remove("active");
// });

// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY < lastScroll) {
//     sidebar.style.top = "80px";
//   } else {
//     sidebar.style.top = "-100px";
//   }

//   lastScroll = window.scrollY;
// });

// const sidebar = document.getElementById("side-bar");
// const content = document.querySelector(".content");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
// });
// content.addEventListener("click", () => {
//   sidebar.classList.remove("active");
// });

// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY < lastScroll) {
//     sidebar.style.left = "-230px";
//   } else {
//     sidebar.style.left = "-500px";
//   }

//   lastScroll = window.scrollY;
// });

const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    sidebar.style.opacity = "1";
    sidebar.style.visibility = "visible";
  } else {
    sidebar.style.opacity = "0";
    sidebar.style.visibility = "hidden";
  }

  lastScroll = window.scrollY;
});
