// Demo vòng lặp

// lặp 10 lần

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log("Lặp lần thứ:", i);
// }
for (let i = 1; i <= 10; i++) {
  console.log("Lặp lần thứ:", i);
}

for (let i = 1, j = 1; i <= 10; i++, j = j + 3) {
  console.log("I", i);
  console.log("J", j);
}

let i = 0;
let sum = 0;

while (sum < 100) {
  i++;
  sum = i + sum;
}

console.log("check i và sum", i, sum);

let j = 0;
while (j <= 10) {
  console.log("check j  thứ", j);
  j++;
}
do {
  j++;
  console.log("Check lần lặp thứ j", j);
} while (j <= 0);

// Demo break và continue

for (let i = 0; i < 100; i++) {
  console.log("Vòng lặp ", i);
  if (i % 2 == 0 && i >= 6) {
    console.log("Kiểm tra số chẵn lớn hơn hoặc bằng 6", i);
    break;
  }
}

for (let i = 0; i < 10; i++) {
  console.log("Vòng lặp ", i);
  if (i == 6) {
    continue;
  }
  console.log("Kiểm tra số chẵn lớn hơn hoặc bằng 6", i);
}

// Vòng lặp lòng nhau

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("Kết quả i và j", i, j);
  }
}
// Nhập vào N chuỗi số và tìm ra số lớn nhất

// chuỗi số: a1, a2, a3, a4,....

// let max = a1;
// for (let i = 1; i <= N; i = i + 1) {
//   if (ai >= a1) {
//     max = ai;
//   }
// }
// console.log("Số lớn nhất trong chuỗi:", max);

function alertAboutT() {
  let t;
  do {
    t = Number(prompt("Nhập nhiệt độ"));
    if (t > 30 && !Number.isNaN(t)) {
      alert("Vui lòng giảm nhiệt độ");
    } else if (t < 18 && !Number.isNaN(t)) {
      alert("Vui lòng tăng nhiệt độ");
    } else if (!Number.isNaN(t)) {
      alert("Cảm ơn! Nhiệt độ đã ổn định!");
    } else {
      alert("Vui lòng nhập số!");
    }
  } while (t > 30 || t < 18 || Number.isNaN(t));
}

// Kiểm tra số nguyên tố
function checkPrime() {
  const N = Number(prompt("Nhập số cần kiểm tra số nguyên tố!"));
  if (N >= 2) {
    let isPrime = true;
    for (let i = 2; i < N; i++) {
      // Bất kỳ i có N chia hết cho i thì không phải số nguyên tố
      if (N % i == 0) {
        isPrime = false;
        break;
      }
    }

    // Kiểm tra số nguyên tố
    if (isPrime) {
      alert("Số đã nhập là số nguyên tố!");
    } else {
      alert("Số đã nhập không phải là số nguyên tố!");
    }
  } else {
    alert("Số đã nhập không phải là số nguyên tố!");
  }
}

// Kiểm tra số nguyên tố hiển thị trên body
function checkPrime2() {
  const inputPrime = document.getElementById("input-prime");

  const N = Number(inputPrime.value);

  const result = document.getElementById("result-is-prime");

  let isPrime = true;
  if (N >= 2) {
    for (let i = 2; i < N; i++) {
      // Bất kỳ i có N chia hết cho i thì không phải số nguyên tố
      if (N % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  // Kiểm tra số nguyên tố
  if (isPrime) {
    result.innerHTML = "<b>Số đã nhập là số nguyên tố!</b>";
  } else {
    result.innerText = "<b>Số đã nhập không phải là số nguyên tố!</b>";
  }
}

function primeString() {
  const totalPrime = Number(prompt("Nhập vào số lượng số nguyên tố cần in"));
  let countPrime = 0;
  let N = 2;
  let primeString = "";

  while (countPrime < totalPrime) {
    // Kiểm tra N có phải số nguyên tố hay không
    let isPrime = true;
    for (let i = 2; i < N; i++) {
      if (N % i == 0) {
        isPrime = false;
        break;
      }
    }

    // Nếu N là số nguyên tố, thực thi khối lệnh
    if (isPrime) {
      countPrime++;
      primeString = primeString + " " + N;
    }
    N++;
  }
  console.log("Dãy số nguyên tố là", primeString);
}

// Session 13
// Bài 1: 3: Hiển thị 20 số Fibonacci
function printFibonacci() {
  const number = 20;
  let a = 1;
  let b = 2;
  let FibonacciString = a + " " + b;

  for (let i = 2; i < 20; i++) {
    let Fibonacci = a + b;
    a = b;
    b = Fibonacci;
    FibonacciString += " " + Fibonacci;
  }

  const printFibonacci = document.querySelector("#print-fibonacci");
  printFibonacci.innerHTML = FibonacciString;
}

// Bài 1: 4: Tìm số Fibonacci chia hết cho 5:
function findNumber() {
  const number = 20;
  let a = 1;
  let b = 2;

  for (let i = 2; i < 20; i++) {
    let Fibonacci = a + b;
    a = b;
    b = Fibonacci;
    if (Fibonacci % 5 == 0) {
      const printFibonacci = document.querySelector("#fibonacci-mod-5");
      printFibonacci.innerHTML = Fibonacci + " là số Fibonacci chia hết cho 5";
      break;
    }
  }
}

// Bài 1: 7 Fizz và Buzz

function FizzBuzz() {
  let print = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        print += "FizzBuzz ";
      } else {
        print += "Fizz ";
      }
    } else if (i % 5 == 0) {
      print += "Buzz ";
    } else {
      print += i + " ";
    }
  }
  console.log("Print Fizz and Buzz:", print);
}

function printTriangle() {
  let content = "";
  const start = "*";
  const space = "&nbsp;&nbsp;";
  const n = Number(prompt("Nhập vào chiều dài của tam giác"));

  for (let i = 1; i <= n; i++) {
    content += space.repeat(n - i);
    content += start.repeat(i);
    content += "<br>";
  }
  const printTriangle = document.querySelector("#print-triangle");
  printTriangle.innerHTML = content;
}

// Bài 8: Game đoán số

function guessNumber() {
  // Dãy số random từ 0 đến bé hơn hoặc bằng range
  const range = Number(prompt("Bạn muốn đoán trong khoảng từ 0 đến mấy?"));

  // Tạo số random
  const randomNumber = Math.floor(Math.random() * (range + 1));
  console.log("check number random", randomNumber, range);

  do {
    // Nhập vào số để đoán
    const guessNumber = Number(
      prompt("Bạn đoán số mấy? (Điền chữ để kết thúc trò chơi)")
    );

    // Kiểm tra số nhập vào có phải NaN hay không?
    if (Number.isNaN(guessNumber)) {
      // Return là lệnh dùng trong function, dùng để kết thúc function và trả về giá trị
      return alert("Cảm ơn bạn đã tham gia");
    }
    if (guessNumber == randomNumber) {
      // Khi đoán đúng thì kết thúc trò chơi
      return alert("Chúc mừng, bạn đã đoán đúng");
    } else if (guessNumber < randomNumber) {
      alert("Vui lòng nhập số lớn hơn");
    } else {
      alert("Vui lòng nhập số nhỏ hơn");
    }
  } while ("hello");
}

// session 13: bài 2: In trái tim

function printHeart() {
  let print = "";
  for (let row = 0; row <= 5; row++) {
    for (let col = 0; col <= 6; col++) {
      if ((row == 0 && col % 3 != 0) || (row == 1 && col % 3 == 0)) {
        print += "* &nbsp;";
      } else if (row - col == 2 || row + col == 8) {
        print += "* &nbsp;";
      } else {
        print += "&nbsp;&nbsp;&nbsp;";
      }
    }
    print += "<br>";
  }
  const heart = document.querySelector("#print-heart");
  heart.innerHTML = print;
}
