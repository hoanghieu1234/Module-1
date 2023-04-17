const users = [
  { userName: "KhoaLe", password: "1234" },
  { userName: "PhucTN", password: "1234" },
  { userName: "XuyenTR", password: "12344" },
  { userName: "TungDT", password: "123445" },
];

// B1. Lấy element của form

const formElement = document.querySelector("form");

// B2. Lắng nghe sự kiện submit
formElement.addEventListener("submit", (event) => {
  // Chặn action
  event.preventDefault();
  console.log(event);
  //   B3. Đặt biến user chứa thông tin người dùng nhập
  const user = {
    userName: event.target[0].value.trim(), // trim() bỏ dấu space ở 2 bên giá trị
    password: event.target[1].value.trim(),
  };

  let isLogin = false;
  // B4. So sánh user với dữ liệu
  users.forEach((item) => {
    console.log();
    if (item.userName === user.userName && item.password === user.password) {
      isLogin = true;
      return alert("Đăng nhập thành công");
    }
  });
  if (!isLogin) {
    alert("Đăng nhập không thành công");
  }
});
