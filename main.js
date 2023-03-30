// Dùng Var: khai báo toàn cục
    var name = 'Hoàng Hiếu'
    console.log('My Name:',`name`);
    gender = 'nam'
    console.log('Giới tính',gender);
// Dùng Let: Khai báo cục bộ
// Nếu khai báo let ở ngoài block thì nó sẽ ko chạy
// Một khi đã khai báo rồi thì let sẽ được sử dụng 1 lần
    let  age = 28
    console.log('Age:',age);
    age = 30;
    console.log('Tuổi lần 2:',age);

    {
        let address = 'Đà Nẵng'
        console.log('Địa Chỉ:', address)
    }
// dùng const: Khai báo hằng số 
// * Khai báo biến 1 lần và không thay đổi được
// * Không thể gán 
const _BIEN_SO_XE = 43;
// String : Là một chuỗi ký tự - dùng '' hoạc " " và ` `
// Number :số
// - Boolean: True, False
// - Null: let car = null
// - Underfine: let car
