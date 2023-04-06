// Cách khai báo mảng:

const pets = ["dog", "cat", "pig", "bird"];

console.log("Phần tử có index là 3", pets[3]);
const slogan = "Để nông dân biết code";

for (const pet of pets) {
  console.log("Thú cưng", pet);
}

for (let i = 0; i < pets.length; i++) {
  console.log("Thú cưng của bạn là", pets[i]);
}
for (let index = 0; index < pets.length; index += 2) {
  const element = pets[index];
  console.log("Check thú cưng giảm chẵn", element);
}

//

for (const word of slogan) {
  console.log("Kiểm tra từng từ:     ", word);
}

const cars = ["KIA", "BMW", "MEC", "VOLVO", "VINFAST", "LEXUS"];

const productList = document.querySelector("#list-product");
let contentProductList = "";

for (const car of cars) {
  contentProductList += `<li>${car}</li>`; // contentProductList = contentProductList + `<li>${car}</li>`
}
productList.innerHTML = contentProductList;

const students = ["Nhàn"];

// Thêm dữ liệu vào array - push() --> add

// CRUD --> create - read - update delete

console.log("Kiểm tra chiều dài student", students.length);

const newLenght = students.push("Khoa");

console.log("Kiểm tra phần tử lần 2", students);
console.log("Kiểm tra chiều dài lần 2", newLenght);

const elementStudents = document.querySelector("#students");

function handleOnChange() {
  const inputStudent = document.querySelector("#student").value;
  students.push(inputStudent);
}
function handleAdd() {
  let contentStudent = "";
  for (const student of students) {
    contentStudent += `<li>${student}</li>`; // contentProductList = contentProductList + `<li>${car}</li>`
  }

  elementStudents.innerHTML = contentStudent;
}
const multiplication_table = [];
// Xây dựng bảng cửu chương
for (let row = 0; row < 9; row++) {
  multiplication_table[row] = [];
  for (let col = 0; col <= 9; col++) {
    multiplication_table[row][col] = [row + 2, col + 1, (row + 2) * (col + 1)];
  }
}

console.log("Kiểm tra dữ liệu bảng cửu chương", multiplication_table);

// Thay đổi số - cách 1
const result_1 = document.querySelector("#result-change");
let resultString_1 = "";
const valueNumber = document.querySelector("#number-change").value;
function handleNumber() {
  for (let i = 0; i < valueNumber.length; i++) {
    if (valueNumber[i] % 2 == 0 && valueNumber[i + 1] % 2 == 0) {
      resultString_1 += valueNumber[i] + "-";
    } else {
      resultString_1 += valueNumber[i];
    }
  }

  // in kết quả
  result_1.innerHTML = resultString_1;
}

const result_2 = document.querySelector("#result-change-2");

// oninput --> function được gọi khi giá trị trong input thay đổi
function handleOnInput(element) {
  const valueInput = element.value;
  let resultString_2 = [];
  for (let i = 0; i < valueInput.length; i++) {
    if (valueInput[i] % 2 == 0 && valueInput[i + 1] % 2 == 0) {
      resultString_2.push(valueInput[i] + "-");
    } else {
      resultString_2.push(valueInput[i]);
    }
  }
  // in kết quả
  const arrayToString = resultString_2.join("");
  result_2.innerHTML = arrayToString;
}

// Bài 3: Chuyển đổi String

const resultConvertString = document.querySelector("#result-convert-string");

function convertString(element) {
  const str = element.value;

  const UPPER = "ABCDEFGHIKLMNOPQTUVXYZW";
  let convertStr = "";
  for (let k = 0; k < str.length; k++) {
    let isUpper = false;
    for (let i = 0; i < UPPER.length; i++) {
      if (str[k] == UPPER[i]) {
        isUpper = true;
        break;
      }
    }

    if (isUpper) {
      convertStr += str[k].toLowerCase();
    } else {
      convertStr += str[k].toUpperCase();
    }
  }

  resultConvertString.innerHTML = convertStr;
}

// Cách 2:

function convertString2(element) {
  const str = element.value;
  const UPPER = "ABCDEFGHIKLMNOPQTUVXYZW";
  let convertStr = "";

  //   Dùng vòng lặp lặp qua từng chữ đã nhập
  for (const word of str) {
    // Dùng includes() để xác định chữ cái đó có trong chuỗi in hoa hay không?
    if (UPPER.includes(word)) {
      convertStr += word.toLowerCase();
    } else {
      convertStr += word.toUpperCase();
    }
  }
  resultConvertString.innerHTML = convertStr;
}

// Bài 3 Typing

// Lắng nghe sự kiện khi nhập bàn phím từ textarea

// Đếm số lần sự kiện oninput thực hiện
let count = 0;
// Chuỗi số cần hiển thị
const str = "Tôi là thằng ngốc";
// Kết quả trả về
let result = str[count];

// Function được gọi khi oninput thay đổi
function handleKey(element) {
  // Khi oninput thay đổi --> thay đổi giá trị của input như str đã được tạo
  element.value = result;
  // Khi mà, số lần nhập lớn hơn bằng str.length -1 (số chỉ mục - index) = chữ cuối cùng
  if (count >= str.length - 1) {
    // Đếm lại từ đầu
    count = 0;
    // Kết quả nhập lại từ đầu
    result = str[count];
  } else {
    // Nối chuỗi str thứ count tiếp
    count++;
    result += str[count];
  }
}
