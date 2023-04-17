// Get the modal
var modal = document.getElementById("id01");

window.onclick = function (event) {
    if(event.target == modal) {
        modal.display.style = "none";
    }
};
const users = [
    { userName: "KhoaLe", password: "1234" },
    { userName: "PhucTN", password: "1234" },
    { userName: "XuyenTR", password: "12344" },
    { userName: "TungDT", password: "123445" },
  ];
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailError = document.querySelector("#error-email");
    const passwordError = document.querySelector("#error-password");

    const repeatPasswordError = document.querySelector(
      "#error-repeat-password"
    );

    const signUpInfo = {
      email: e.target[0].value.trim().toLowerCase(),
      password: e.target[1].value.trim(),
      repeatPassword: e.target[2].value.trim(),
    };
    const checkValidator = validator(signUpInfo);
    console.log("Kiểm tra error", checkValidator);
    if (checkValidator.isError) {
      emailError.innerHTML = checkValidator.errorEmail;
      passwordError.innerHTML = checkValidator.errorPassword;
      repeatPasswordError.innerHTML = checkValidator.errorRepeatPassword;
    } else {
      emailError.innerHTML = "";
      passwordError.innerHTML = "";
      repeatPasswordError.innerHTML = "";
    }
  });

  function validator(user) {
    let error = {
      isError: false,
      errorEmail: "",
      errorPassword: "",
      errorRepeatPassword: "",
    };

    const regxEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!user.email) {
      error.isError = true;
      error.errorEmail = "Email không được để trống";
    }
    console.log("11111111111");
    if (!user.email.match(regxEmail)) {
      error.isError = true;
      error.errorEmail = "Email không đúng định dạng, vui lòng nhập lại";
    }

    if (user.password !== user.repeatPassword) {
      error.isError = true;
      error.errorRepeatPassword = "Password không trùng khớp, nhập lại";
    }
    if (!user.password) {
      error.isError = true;
      error.errorPassword = "Password không được để trống";
    }
    if (!user.repeatPassword) {
      error.isError = true;
      error.errorRepeatPassword = "Repeat Password không được để trống";
    }
    return error;
  }