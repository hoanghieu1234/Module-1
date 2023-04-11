// Trường dữ liệu
const dataUsers = [
  {
    id: 1,
    firstName: "Phúc",
    lastName: "Nguyễn",
    username: "phucnguyen123",
    imageUrl: "./images/user_1.jpg",
  },

  {
    id: 2,
    firstName: "Nga",
    lastName: "Hồ",
    username: "conangkieuki",
    imageUrl: "./images/user_2.jpg",
  },
  {
    id: 3,
    firstName: "Lan",
    lastName: "Nguyễn",
    username: "bethodethuong",
    imageUrl: "./images/user_3.jpg",
  },
  {
    id: 4,
    firstName: "Hưng",
    lastName: "Lê",
    username: "changtraibebong",
    imageUrl: "./images/user_4.jpg",
  },
  {
    id: 5,
    firstName: "Hoa",
    lastName: "Nguyễn",
    username: "hoarung",
    imageUrl: "./images/user_5.jpg",
  },
];

/**
 * @Note
 * - Mỗi lần thay đổi dữ liệu, bắt phải gọi hàm renderData
 *
 */

// Gọi renderData khi JS được chạy lần đầu
renderData(dataUsers);

// Các hàm thực thi

function renderData(data) {
  // B1. Lấy được element cần thay đổi content
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody"); // Đây là thẻ muốn thay đổi nội dung bên trong
  // B2. Đặt biến content để thay đổi nội dung sau khi hiển thị
  contentTbody = "";

  //   Bước thay đổi content theo dữ liệu đã cho
  // B2.1 Lặp qua từng phần tử trong data để mỗi lần lặp thêm vào 1 row (tr)
  //   forEach() là method lặp qua từng phần tử trong mảng và lấy được element, index, array đúng theo thứ tự trong callback function
  data.forEach((user, index, array) => {
    contentTbody += ` <tr>
    <td>${index + 1}</td>
    <td><img src="${user.imageUrl}" /></td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.username}</td>
    <td>
        <button onclick="handleEdit(${user.id})">Edit</button>
        <button onclick="handleDelete('${user.id}')">Delete</button>
    </td>
  </tr>`;
  });

  // B3. Gán nội dung đã được thay đổi vào element HTML
  tbody.innerHTML = contentTbody;
}

// function được gọi khi click button Search

// Cách 1 search
function handleSearch() {
  // B1. Lấy giá trị của input search
  const valueSearch = document.querySelector("#input-search").value;
  console.log("Kiểm tra search", valueSearch);

  //   Cách 1:
  //   B2. Khai bảo biển để lấy chứa dữ liệu sau khi lọc
  const dataSearch = [];
  dataUsers.forEach((item) => {
    // Chuyển 2 dữ liệu cần so sánh về kiểu thường hoặc in hoa để đồng nhất về mặt kiểu in
    if (
      // So sánh bao gồm includes() trả về true false
      item.firstName.toLowerCase().includes(valueSearch.toLowerCase()) ||
      item.username == valueSearch
    ) {
      // Thỏa điều kiện thì đẩy phần tử vào dataSearch
      dataSearch.push(item);
    }
  });
  console.log("", dataSearch);

  //   B3. Render dữ liệu đã lock
  renderData(dataSearch);
}

// Cách 2 search
function handleSearch2(value) {
  const dataSearch = dataUsers.filter(
    (user) =>
      user.firstName.toLowerCase().includes(value.toLowerCase()) ||
      user.username.toLowerCase().includes(value.toLowerCase())
  );
  //   B3. Render dữ liệu đã lock
  renderData(dataSearch);
}

function handleDelete(id) {
  console.log(id);
  dataUsers.forEach((user, index) => {
    if (user.id == id) {
      dataUsers.splice(index, 1);
    }
  });
  console.log(2222222, dataUsers);
  renderData(dataUsers);

  //   dùng findIndex() để tìm phần tử
  // filter không làm mất dữ liệu trong dataUser
  //   const newData = dataUsers.filter((user) => user.id !== id);
  //   renderData(newData);
}

function handleToggle(element) {
  // Lấy element để đổi thông tin thẻ button

  // B1. Lấy element cần chỉnh sửa
  const form = document.querySelector("#form");

  //   Đặt điều kiện kiểm tra để ẩn/ hiện form
  if (!form.style.display || form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function handleAddUser() {
  // B1. Lấy tất car giá trị trong form
  const avatar = document.querySelector("#avatar");
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const userName = document.querySelector("#user-name");
  //   const idInput = document.querySelector("#id-user").value;

  //   B2. Đặt biến là 1 object theo cấu trúc của dataUser

  const user = {
    id: dataUsers[dataUsers.length].id + 1,
    firstName: firstName.value,
    lastName: lastName.value,
    imageUrl: avatar.value,
    username: userName.value,
  };
  // Tư từ học phần này
  //   let isDulicate = false;
  //   dataUsers.forEach((item, index) => {
  //     if (item.id == user.id) {
  //       dataUsers.splice(index, 1, user);
  //       isDulicate = true;
  //       return;
  //     }
  //   });
  //   if (!isDulicate) {
  //     dataUsers.push(user);
  //   }

  //   B3. Đẩy user vào dataUser

  dataUsers.push(user);
  // B4. render lại dữ liệu --> cập nhật lại table
  renderData(dataUsers);
  //   Sau khi submit thì đóng toggle
  handleToggle();
  //   Xóa luôn dữ liệu ở ô input trong form
  firstName.value = "";
  lastName.value = "";
  userName.value = "";
}

// Cách nâng cao
const user = {};
// Cách nâng cao
function handleOnChange(element) {
  user[element.name] = element.value;
  console.log(user);
}
// Cách nâng cao
function handleAddUser2() {
  user.id = dataUsers[dataUsers.length - 1].id + 1;
  dataUsers.push(user);
  // B4. render lại dữ liệu --> cập nhật lại table
  renderData(dataUsers);
  //   Sau khi submit thì đóng toggle
  handleToggle();
  //   Xóa luôn dữ liệu ở ô input trong form
  console.log(111111, dataUsers);
}

function handleEdit(id) {
  // B1. Khai báo 1 biến sẽ là user cần edit
  let userFind;
  // B2. Tìm user theo id

  dataUsers.forEach((user) => {
    if (user.id == id) {
      userFind = user;
      return;
    }
  });

  const avatar = document.querySelector("#avatar");
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const username = document.querySelector("#user-name");
  const idInput = document.querySelector("#id-user");

  firstName.value = userFind.firstName;
  lastName.value = userFind.lastName;
  username.value = userFind.username;
  idInput.value = userFind.id;
  //   avatar.value = user.imageUrl;
  handleToggle();
}

// Tham khảo chơi
function getForm() {
  const avatar = document.querySelector("#avatar");
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const username = document.querySelector("#user-name");
  return { avatar, firstName, lastName, username };
}
