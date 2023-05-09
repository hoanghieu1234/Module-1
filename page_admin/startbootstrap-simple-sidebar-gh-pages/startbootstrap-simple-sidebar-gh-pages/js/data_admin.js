
const productDB = [
    {id:1,img:'/images/sach-1.jpg',name:'Tôi thấy hoa vàng trên cỏ xanh',price:12,},
    {id:2,img:'/images/sach-2.jpg',name:'Tôi và Nàng',price:13,},
    {id:3,img:'/images/sach-3.jpg',name:'Rùa và Thỏ',price:14,},
]


const productlistDB  = JSON.parse(localStorage.getItem("book")); 
if(!productlistDB){
    localStorage.setItem("book",JSON.stringify(productDB));
}

const accountAdmin = [
    {username:'hieunguyen@gmail.com',password:12341234},
    {username:'hoanghieu@gmail.com',password:12341234},
]
localStorage.setItem("accountAdmin",JSON.stringify(accountAdmin));








