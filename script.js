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
function handleNumber() {
  const valueNumber = document.querySelector("#number-change").value;
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
