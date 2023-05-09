const form = document.querySelector("#regist-form");
      form.addEventListener("submit", (e) => {

        e.preventDefault();

        // B1. Lấy giá trị trong trường thông tin (input)
        const emailValue = document
          .querySelector("#emailUser")
          .value.trim()
          .toLowerCase();
        const userNameValue = document.querySelector("#username").value;
        const passwordValue = document.querySelector("#passwordUser").value;
        const confirmPasswordValue = document.querySelector("#repeat-password").value;
        console.log(emailValue,userNameValue,passwordValue, confirmPasswordValue);
        // B2. Kiểm tra valadate
        const rexgEmail =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        //   B3. tạo một biến để chứa thông tin lỗi
        const error = {
          isError: false,
          emailMsg: "",
          passwordMsg: "",
          confirmPasswordMsg: "",
        };

        // B4. Check điều kiện lỗi và gán thông tin lỗi
        if (!emailValue.match(rexgEmail)) {
          error.isError = true;
          error.emailMsg = "Email không đúng định dạng, vui lòng nhập lại";
        }

        if (emailValue.length > 30) {
          error.isError = true;
          error.emailMsg = "Email quá dài! Vui lòng nhập lại";
        }
        if (
          !passwordValue ||
          passwordValue.length < 8 ||
          passwordValue.length > 20
        ) {
          error.isError = true;
          error.passwordMsg =
            "Password phải lớn hơn 8 ký tự và bé hơn 20 ký tự";
        }

        if (passwordValue !== confirmPasswordValue) {
          error.isError = true;
          error.confirmPasswordMsg = "Mật khẩu không trùng, vui lòng nhập lại";
        }

        //B5. Hiển thị lỗi

        renderError(error);

        // B6. Thực hiện kiểm tra thông tin với local
        if (!error.isError) {
          const accounts = JSON.parse(localStorage.getItem("accounts")) ?? [];
          let isDulicate = false;
          accounts.forEach((userAccount) => {
            if (userAccount.email === emailValue) {
              error.emailMsg =
                "Email đã tồn tại, vui lòng chọn email khác hoặc login";
              isDulicate = true;
              renderError(error);
            }
          });

          if (!isDulicate) {
            accounts.push({
              email: emailValue,
              password: passwordValue,
              userName: userNameValue,
            });
            localStorage.setItem("accounts", JSON.stringify(accounts));
            alert('Bạn đã đăng ký thành công!')
            window.location = "#";
          }
        }
      });

      function renderError(error) {
        const errorEmailElement = document.querySelector("#error-email");
        const errorPasswordElement = document.querySelector("#error-password");
        const errorConfirmPasswordElement = document.querySelector(
          "#error-repeatPassword"
        );
        errorEmailElement.innerHTML = error.emailMsg;
        errorPasswordElement.innerHTML = error.passwordMsg;
        errorConfirmPasswordElement.innerHTML = error.confirmPasswordMsg;
      }