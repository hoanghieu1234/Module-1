// Tính điểm trung bình Toán, Lý , Hoá và tổng của nó

    // Number là method chuyển đổi giá trị trong nó từ String sang Number
function bai_1 () {
    const mathMark = Number(prompt('Vui lòng nhập điểm Toán = '))
    const chemisMark = Number(prompt('Vui lòng nhập điểm Hoá = '))
    const physicMark = Number(prompt('Vui lòng nhập điểm Lý = '))
    
    const average = (mathMark + chemisMark + physicMark)/3
    document.writeln('Tổng điểm 3 môn Toán Lý Hoá là: ',average * 3)
    document.writeln('Điểm trung bình 3 môn Toán Lý Hoá là:',average)
}
