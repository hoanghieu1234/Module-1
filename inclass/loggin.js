const users = [
    {userName:"HieuNguyen",passWord:"1234"},
    {userName:"PhucTN",passWord:"12345"},
    {userName:"XuyenDN",passWord:"123456"},
    {userName:"TungDN",passWord:"123457"}, 
];

// B1: Get Element Form

const formElement = document.querySelector("form");

// B2: Bắt sự kiện Submit

formElement.addEventListener("submit", (event) => {
    // Chặn action
    event.preventDefault();
    console.log(event);
    // B3: Đặt biến user chứa thông tin người dùng nhập.
    const user = {
        userName: event.target[0].value.trim(), // trim() loại bỏ dấu space 2 bên của người dùng.
        passWord: event.target[1].value.trim(), //target[] truy cập đến 2 phần tử trog form.
    };
    
    let isLogin = false;
    // B4: So sánh với dữ liệu
    users.forEach((item) =>{
        if (item.userName === user.userName && item.passWord === user.passWord) {
            isLogin = true;
            return alert("Đăng nhập thành công");
        }
    });
    if(!isLogin) {
        alert("Đăng nhập không thành công");
    }
});