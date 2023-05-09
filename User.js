let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.add('active');
}
// login
let loginForm = document.querySelector('.login-form-container');

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove('active');
}



// Regist
let registForm = document.querySelector('.regist-form-container');

document.querySelector(".links").onclick = () => {
  registForm.classList.toggle('active');
  loginForm.classList.remove('active');
}


document.querySelector("#close-regist-btn").onclick = () => {
    registForm.classList.remove('active');
}

document.querySelector(".login-back").onclick = () => {
  registForm.classList.remove('active');
  loginForm.classList.toggle('active');
}


window.onscroll = () => {
    const _header_2 = document.querySelector(".header .header-2");
 
    searchForm.classList.remove('active');

    if(window.scrollY > 80) {
        _header_2.classList.add('active');
    }else {
        _header_2.classList.remove('active'); 
    }
}

window.onload = () => {
    const _header_2 = document.querySelector(".header .header-2");

    if(window.scrollY > 80) {
        _header_2.classList.add('active');
    }else {
        _header_2.classList.remove('active'); 
    }
}


// Thư viện swipper
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
});

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// cart

// let btn_add = document.querySelectorAll("#btn-add");

// let product = [
//   {
//     name:'book-1',
//     tag: 'book-1',
//     price: 5,
//     inCart: 0
//   },
//   {
//     name:'book-2',
//     tag: 'book-2',
//     price: 10,
//     inCart: 0
//   },
//   {
//     name:'book-3',
//     tag: 'book-3',
//     price: 15,
//     inCart: 0
//   },
//   {
//     name:'book-4',
//     tag: 'book-4',
//     price: 20,
//     inCart: 0
//   },
//   {
//     name:'book-5',
//     tag: 'book-5',
//     price: 25,
//     inCart: 0
//   },
//   {
//     name:'book-6',
//     tag: 'book-6',
//     price: 30,
//     inCart: 0
//   },
//   {
//     name:'book-7',
//     tag: 'book-7',
//     price: 35,
//     inCart: 0
//   },
//   {
//     name:'book-8',
//     tag: 'book-8',
//     price: 40,
//     inCart: 0
//   },
//   {
//     name:'book-9',
//     tag: 'book-9',
//     price: 45,
//     inCart: 0
//   },
//   {
//     name:'book-10',
//     tag: 'book-10',
//     price: 50,
//     inCart: 0
//   },
// ]

// for(let i = 0; i < btn_add.length; i++) {
//     btn_add[i].addEventListener("click", () =>{
//         cartNumber(product[i]);
//         totalcost(product[i]);
//     })
// }

// // Load lại trang sản phẩm không mất
// function onLoadCartNumber() {
//     let productNumber = localStorage.getItem("cartNumbers"); 

//     if (productNumber) {
//       document.querySelector(".shopping .quantity").textContent = productNumber;
//     }
// }

// // Thêm sản phẩm, sản phẩm sẻ nhảy lên icon card
// function cartNumber(product) {

//     console.log(product);
//     let productNumber = localStorage.getItem("cartNumbers");

//     productNumber = parseInt(productNumber);
    
//     if(productNumber) {
//       localStorage.setItem("cartNumbers",productNumber + 1);
//       document.querySelector(".shopping .quantity").textContent = productNumber + 1;
//     }else {
//       localStorage.setItem("cartNumbers",1);
//       document.querySelector(".shopping .quantity").textContent = 1;
//     }

//     setItems(product);
// }

// function setItems(product) {
//   let cartItem = localStorage.getItem("productsInCart");
//   cartItem = JSON.parse(cartItem);
//   if(cartItem != null) {
//       if (cartItem[product.tag] == undefined) {
//         cartItem = {
//             ...cartItem,
//             [product.tag]: product
//         }
//       }
//       cartItem[product.tag].inCart += 1;
//   } else {
//     product.inCart = 1;
//     cartItem = {
//       [product.tag]: product
//     }
//   }
//   localStorage.setItem("productsInCart",JSON.stringify(cartItem));
// }

// function totalcost(product) {
//   let cartCost = localStorage.getItem("totalcost");
 
//   if (cartCost != null) {
//     cartCost = parseInt(cartCost);
//     localStorage.setItem("totalcost",cartCost + product.price);
//   } else {
//     localStorage.setItem("totalcost",product.price);
//   }
    
// }

// onLoadCartNumber();



const productLocal = JSON.parse(localStorage.getItem("book"));
renderBooksLocal(productLocal);
function renderBooksLocal(productLocal) {
  const productUser = document.querySelector("#product-user");
 
  let content = "";
  productLocal.forEach((product,index) => {
      content += `
          <div class="swiper-slide box" id="product-box">
              <div class="icons">
                  <a href="" class="fas fa-search"></a>
                  <a href="" class="fas fa-heart"></a>
                  <a href="" class="fas fa-eye"></a>
              </div>
              <div class="content">
                  <div class="images">
                      <img src="${product.img}" alt="">
                  </div>
                  <h3>${product.name}</h3>
                  <div class="price">$${product.price}.00 <span>$20.99</span></div>
                  <button class="btn" id="btn-add" onclick="handelDetail('${product.id}')"> add to cart</button>
              </div>
        </div>
      `;
  });
  productUser.innerHTML = content;
}



function searchLocalStorage() {

  const getValue = JSON.parse(localStorage.getItem("book")) || [];

  
  const getinputSearch = document.getElementById("search-box").value;

  let productSearch = getValue.filter(value => {
    return value.name.toUpperCase().includes(getinputSearch.toUpperCase());
  });
  renderBooksLocal(productSearch);
}



function handelDetail(id) {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if(userLogin) {
          window.location = `./shopping-cart/detaiCart.html?id=${id}`;
      } else {
          alert("Bạn phải đăng nhập");
      }
    
}






