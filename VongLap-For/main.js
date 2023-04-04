// Vòng lặp for
//  Bài 1: Session-13
let num = 0;
let i = 0;
for (let i = 0; i < 10; i ++) {
   if(Number(i == 9)) {
    console.log('Đã Hoàn Thành',i)
   } else {
        console.log('Chưa Hoàn Thành',i)
   }
}
// Bài 2: Session-13
// * Do-While
function _temp () {
    let _inputTemp;
    do {
        _inputTemp = Number(prompt('Nhập vào nhiệt độ'))
        if (_inputTemp > 30) {
            alert ('Vui lòng giảm nhiệt độ')
        } else if(_inputTemp < 18) {
            alert('Vui lòng tăng nhiệt độ')
        }else {
            alert('cảm ơn nhiệt độ đã ổn định')
        }
        console.log('Kiểm tra nhiệt độ',_inputTemp + 'C');
    } while (_inputTemp >=40 || _inputTemp <18)
}
// // * Bài 2: Session-12 Trong phần này, chúng ta sẽ phát triển một ứng dụng cho phép hiển thị 20 số nguyên
// tố đầu tiên.

function SNT()
{
    const n = Number(prompt('Nhập số nguyên tố'))
    let isPrime = true;
    if (n < 2){
        isPrime = false;
    }
    else{
        for (let i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime == true){
        document.write(n + " là số nguyên tố ");
    }
    else{
        document.write(n + " không phải là số nguyên tố");
    }
}

// * Bài 3: Nhập N trong N có bao nhiêu số nguyên tố.

function _inputSNT () {
// Nhập N là số nguyên tố cần kiểm tra
const N = parseInt(prompt('Nhập số cần kiểm tra số nguyên tố'));
for (let i = 2; i <= N; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (i > 1 && isPrime == true) {
        document.write(i);
    }
}
}

// Bài 4:   
function prime() {
    const totalPrime = Number(prompt('Nhập vào số lượng nguyên tố cần in'))
    let countPrime = 0;
    let N = 2;
    let primeString = "";

    while (countPrime < totalPrime) {
        let isPrime = true;
        for (let i = 2; i < N; i ++) {
            if (N % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            countPrime ++;
            primeString = primeString + " " + N;
        }
        N++;
    }
    
    console.log(primeString);
}


// Nhập vào 1 số cho biết ước của số đó
function uocChung()
{
    let M = '';
    const N = Number(prompt('Nhập vào N cần tìm ước'))
    for (let i = 1; i <= N; ++i)
        if (N % i == 0){
            M += i;
        }
    console.log(M);
}
// Số hoàn hảo
function soHoanhao()
{
    let sum = 0;
    let a
    a = Number(prompt('Kiểm tra a có phải là số hoàn hảo không ?'))
    for (let i = 1; i < a; i ++) {
        if (a % i == 0){
            sum += i;
        }
    }
    if (sum == a) {
        console.log(a + ' Là số hoàn hảo');
    } else {
        console.log(a + ' Không phải là số hoàn hảo')
    }
}
// Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên
function total () {
    let sum = 0;
    for (let i = 0; i < 30; i++) {
        if (i % 7 == 0) {
            sum += i; 
        }
    }
    if ()
}

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.


