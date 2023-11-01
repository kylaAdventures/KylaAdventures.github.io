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
    sidebar.style.top = "30px";
  } else {
    sidebar.style.top = "-100px";
  }

  lastScroll = window.scrollY;
});
