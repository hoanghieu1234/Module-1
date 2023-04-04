//Dãy số Fibonacci
function Fibonacci () {
    const number = Number(prompt('Nhập vào số fibo:'));
    let n1=0, n2 =1, nextTerm;
    
    console.log('Fibonacci Series:');

    for(let i = 1; i <=number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
// // : Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết
// cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả
// 3 và 5 thì in ra chữ "FizzBuzz".

function fizzBuzz () {
    let print = '';
    for (let i = 1; i <= 100; i ++) {
        if(i % 3 == 0){
            if (i % 5 == 0) {
                print += 'FizzBuzz';
            } else {
                print += 'Fizz';
            }
        }else if (i % 5 == 0) {
            print += 'Buzz';
        }else {
            print += i + '';
        }
    }
    console.log('Print fizz and buzz',print);
}
fizzBuzz ();

// Bài 8 : Game đoán số
function guessNumber () {
    // Dãy số random từ 0 đến bé hơn hoặc bằng range
    const range = Number(prompt('Bạn muốn đoán trong khoảng từ 0 đến mấy ?'))
    const randomNumber = Math.floor(Math.random() * (range + 1))

    do {
        // Nhập vào để đoán số
        const guessNumber = Number(prompt('Bạn muốn đoán số nào ? (Điền chữ để kết thúc trò chơi)'))
        // isNaN không phải là số; Kiểm tra có phải là kiểu số ko
        if (Number.isNaN(guessNumber)) {
            return alert('Cảm ơn bạn tham gia')
        }
        // Khi đoán đúng mới kết thúc trò chơiiiii
        if (guessNumber == randomNumber) {
            return alert('chúc mừng bạn đã đoán đúng') 
        } else if (guessNumber < randomNumber) {
            alert('Vui lòng nhập số lớn hơn')
        } else {
            alert('Vui lòng nhập số nhỏ hơn')
        }
    }while (true);
}
guessNumber();
// return dùng với function khi nó trả về kết quả cho func đó và nó lập tức thoát ngay func đó(chúng ta muốn tra giá trị gì đó thì : return)

// * Tam giác vuông

function  rightTriangle () {
    // Cột 
    for (i = 0; i < 5; i ++) {
        // Hàng
        for (j = 0; j <= i; j ++) {
            document.writeln('*')
        }
        // Xuống dòng và hiện kết quả của từng hàng
        document.writeln('<br/>')
    }
}
rightTriangle ();


function printTriangle () {
    let content = '';
    const start = '*';
    const space = '&nbsp;&nbsp;';
    const n = Number(prompt('Nhập vào chiều dài của tam giác'));

    for(let i = 0; i <= n; i ++) {
        content += space.repeat(n - i);
        content += start.repeat(i);
        content += '<br/>';
    }
    const printTriangle = document.querySelector('#print-triangle')
    printTriangle.innerHTML = content;
}
printTriangle ()


