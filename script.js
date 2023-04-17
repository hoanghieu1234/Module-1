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

window.addEventListener("keydown", (event) => {
  console.log(1111111, event);
  if (event.shiftKey) {
    console.log("Chữ viết hoa", event.key);
  }
});

// Xử lý submit dữ liệu

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

const users = [
  { userName: "phucdeptrai", password: "daconguoiyeu" },
  { userName: "huyquanhoa", password: "luonyeudoi" },
  { userName: "xuyendaigia", password: "nhieutien" },
];
