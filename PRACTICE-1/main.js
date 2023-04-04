// A chia hết cho B
function _input () {
    const a = Number(prompt('Nhập a'))
    const b = Number(prompt('Nhập b'))

    if (a % b == 0) {
        alert('A là số chia hết cho B')
    } else {
        alert ('A là số không chia hết cho B')
    } 
}
// Nhập số tuổi in ra kết quả nếu tuổi học sinh đó không đủ đk vào lớp 10.