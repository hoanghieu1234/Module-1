// logOut
const getuserLogin = JSON.parse(localStorage.getItem("userLogin"));

const getHeader = document.querySelector("header");


renderLogout(getuserLogin);

function renderLogout(user) {
    if(user) {
         const contentHeader = `
        <div class="header-1">

            <a href="#" class="logo"> <i class="fas fa-book"></i> Store-Books</a>

            <form action="" class="search-form">
                <input type="search" name="" placeholder="search-here" id="search-box">
                <label for="search-box" class="fas fa-search"></label>
            </form>

            <div class="icons">
                <div id="search-btn" class="fas fa-search"></div>
                <div class="shopping">
                    <a href="./shopping-cart/shopping-cart/cart.html" class="fas fa-shopping-cart" onclick="handleViewCarts()"></a>
                    <span class="quantity">0</span>
                </div>
                <div class="logout">
                    <div class="user-info">
                        <p>${getuserLogin.email}</p>
                    </div>
                    <div id="icon-logout">
                        <i class="fa-solid fa-right-from-bracket" onclick ="handleLogout()">Logout</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-2">
        <nav class="navbar">
            <a href="./index.html">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
        </nav>
        </div>
        `;
        getHeader.innerHTML = contentHeader;
    }
}

function handleLogout() {
    localStorage.removeItem("userLogin");
    window.location = "index.html"
}

// Người dùng đăng nhập vào mới cho qua giỏ hàng
function handleViewCarts() {
    if (getuserLogin) {
      window.location = "shopping-cart/shopping-cart/cart.html";
    } else {
      window.location = "index.html";
    }
}



// login
const formLogin = document.querySelector("#form-login");

formLogin.addEventListener("submit",(e) => {
    e.preventDefault();
    //  select 
    const emailValue = document.querySelector("#email").value.trim().toLowerCase();
    const passWord = document.querySelector("#password").value;
    // get local
    const accountDB = JSON.parse(localStorage.getItem("accounts")) || [];
    const accountAdmin = JSON.parse(localStorage.getItem("accountAdmin")) || [];
    let userLogin;
    let adminLogin;

    // check account
    accountDB.forEach((value) => {
        if (emailValue === value.email && passWord === value.password) {
            userLogin = value;
            delete userLogin.password;
        }
    });

    // Checkt Admin Login
    accountAdmin.forEach((value) => {
        if (emailValue == value.username && passWord == value.password) {
            adminLogin = value;
            delete adminLogin.password;
             }
    });

    if (userLogin) {
        localStorage.setItem("userLogin",JSON.stringify(userLogin));
        alert("Bạn đã đăng nhập thành công!")
        window.location = "index.html";
    } else {
        const errorAccount = document.querySelector("#error");
        errorAccount.innerHTML = "Email hoặc mật khẩu không chính xác, vui lòng nhập lại";
    } 
    if (adminLogin) {
        localStorage.setItem("adminLogin",JSON.stringify(adminLogin));
        alert("Tài khoản admin chính xác,bạn đã đăng nhập thành công!")
        window.location="./page_admin/startbootstrap-simple-sidebar-gh-pages/startbootstrap-simple-sidebar-gh-pages/index.html";       
    } else {
        const errorAccount = document.querySelector("#error");
        errorAccount.innerHTML = "Email hoặc mật khẩu admin không chính xác, vui lòng nhập lại";
    } 

});










