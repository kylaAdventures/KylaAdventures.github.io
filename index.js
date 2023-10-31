const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
