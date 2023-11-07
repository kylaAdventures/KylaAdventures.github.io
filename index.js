const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");
const h1 = document.querySelector(".title-container h1");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (isScrolledToTop()) {
    sidebar.style.top = "30";
  } else {
    if (window.scrollY < lastScroll) {
      sidebar.style.top = "40px";
    } else {
      sidebar.style.top = "-100px";
    }
  }

  lastScroll = window.scrollY;
});

function isScrolledToTop() {
  const rect = h1.getBoundingClientRect();
  return rect.top >= 30;
}
