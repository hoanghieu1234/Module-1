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
