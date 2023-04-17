function handleToggle() {
  const ulElement = document.querySelector(".navbar ul");
  const btnOpen = document.querySelector(".bar-toggle .fa-bars");
  const btnClose = document.querySelector(".bar-toggle .fa-xmark");
  btnClose.classList.toggle("display-none");
  btnOpen.classList.toggle("display-none");

  if (!ulElement.style.display || ulElement.style.display !== "flex") {
    ulElement.style.display = "flex";
  } else {
    ulElement.style.display = "none";
  }
}
// method dùng để lắng nghe sự kiện
window.addEventListener("resize", () => {
  const ulElement = document.querySelector(".navbar ul");
  const barToggle = document.querySelector(".bar-toggle");
  console.log(window.innerWidth);
  if (window.innerWidth > 768) {
    ulElement.style.display = "flex";
    barToggle.style.display = "none";
  } else {
    ulElement.style.display = "none";
    barToggle.style.display = "block";
  }
});
