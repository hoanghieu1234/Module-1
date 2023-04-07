function lession_2 () {
    let resultString_1 = [];
    
    for(i = 0; i < 10; i++) {
        let num = parseFloat(prompt(` Nhập phần tử thứ :${i + 1}`))
        resultString_1.push(num);
    }
    let max = resultString_1[0];
    let index = 0;
    for(i = 1; i < resultString_1.length; i++) {
        if (resultString_1[i] > max) {
            max = resultString_1[i];
            index = i;
        }
    }
    console.log(` phần tử lớn nhất trong mảng là: ${max}, Vị trí ${index + 1}`);
}


function lession_1 () {
    let resultString_2 = [];
    
    for (i = 0; i <10; i ++) {
        let num = parseInt(prompt(`Nhập vào phần tử thứ: ${i + 1} `))
        resultString_2.push(num);
    }

    let total = 0;
    for(i = 0; i <resultString_2.length; i++) {
        if(resultString_2[i] >= 10) {
            total += 1;
        }
    }
    console.log(` Có ${total} phần tử lớn hơn hoặc = 10 trong mảng`);
}

function lession_3 () {
    let resultString_3 = [];
    let n = parseInt(prompt("Nhập phần tử số nguyên vào mảng"))
    for (i = 0; i < n; i++) {
        let num = parseInt(prompt(` Nhập phần tử thứ ${i + 1}`))
        resultString_3.push(num);
    }
    let max = resultString_3[0];
    let sum = resultString_3[0];
    for(i = 1; i  < resultString_3.length; i++) {
        if (resultString_3[i] > max) {
            max = resultString_3[i];
        }
        sum += resultString_3[i];
    }
    let aver = sum / resultString_3.length;
    console.log(aver,max);
}
lession_3 ();