// let searchForm = document.querySelector(".search-form");

// document.querySelector("#search-btn").onclick = () => {
//     searchForm.classList.add('active');
// }

// let loginForm = document.querySelector('.login-form-container');

// document.querySelector("#login-btn").onclick = () => {
//     loginForm.classList.toggle('active');
// }

// document.querySelector("#close-login-btn").onclick = () => {
//     loginForm.classList.remove('active');
// }

// window.onscroll = () => {
//     const _header_2 = document.querySelector(".header .header-2");
 
//     searchForm.classList.remove('active');

//     if(window.scrollY > 80) {
//         _header_2.classList.add('active');
//     }else {
//         _header_2.classList.remove('active'); 
//     }
// }


function localStorageGetItem(key) {
    const data = JSON.parse(localStorage.getItem(`${key}`)) ?? [];
    return data;
  }
  function localStorageSetItem(key, data) {
    localStorage.setItem(`${key}`, JSON.stringify(data));
}

function renderCart() {
    const dataCart = localStorageGetItem("ProductIncart");
    const getTotalCart = document.querySelector(".summary")
    const getElementCart = document.querySelector(".items");  
    
    let contentCart = "";
    let sumCartTotal = ""; 
    let total = 0
    dataCart.forEach((element,index) => {
        contentCart += `
        <div class="product">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mx-auto d-block image" src="${element.image}">
                </div>
                <div class="col-md-8">
                    <div class="info">
                        <div class="row">
                            <div class="col-md-5 product-name">
                                <div class="product-name">
                                    <a href="#">Lorem Ipsum dolor</a>
                                    <div class="product-info">
                                        <div>Name: <span class="value">${element.name}</span></div>
                                        <div>RAM: <span class="value">4GB</span></div>
                                        <div>Memory: <span class="value">32GB</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 quantity">
                                <label for="quantity">Quantity:</label>
                                <input onchange="handleChangeQuantity(${element.id}, this.value)"  type="number" value ="${element.quantity}" class="form-control quantity-input">
                            
                            </div>
                            <div class="col-md-3 price">
                            <span>$${element.price}.00</span>

                                <span>$${element.price * element.quantity}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        total += element.price * element.quantity;
    }); 
   
    sumCartTotal += `
        <h3>Summary</h3>
        <div class="summary-item"><span class="text">Subtotal</span><span class="price">$${total}.00</span></div>
        <div class="summary-item"><span class="text">Discount</span><span class="price">$0</span></div>
        <div class="summary-item"><span class="text">Shipping</span><span class="price">$0</span></div>
        <div class="summary-item"><span class="text">Total</span><span class="price">$${total}.00</span></div>
        <button type="button" class="btn btn-success btn-lg btn-block">Checkout</button>
    `;
    getTotalCart.innerHTML = sumCartTotal;
    getElementCart.innerHTML = contentCart;
}
renderCart()
function renderCartNumber() {
    let productNumber = localStorage.getItem("cartNumber");
    if (productNumber) {
      document.querySelector(".shopping .quantity").textContent = productNumber;
    }
  }

  // Render để không mất số trên thanh Bag
  function renderCartNumber() {
    let productNumber = localStorage.getItem("cartNumber");
    if (productNumber) {
      document.querySelector(".shopping .quantity").textContent = productNumber;
    }
  }
  //  Điều kiện để số nhảy trên thanh Bag
  function cartsNumber(element) {
    let productNumber = localStorage.getItem("cartNumber");
    productNumber = Number(productNumber);
    if (productNumber) {
      localStorage.setItem("cartNumber", productNumber + 1);
      document.querySelector(".shopping .quantity").textContent =
        productNumber + 1;
    } else {
      localStorage.setItem("cartNumber", 1);
      document.querySelector(".shopping .quantity").textContent = 1;
    }
    setItem(element);
}
function handleChangeQuantity(id, value) {
    console.log(value);
   
    const getLocal = JSON.parse(localStorage.getItem("ProductIncart"));

    getLocal.forEach((e,i)=>{
        if(id === e.id) {
            e.quantity = value;      
        } 
        if (e.quantity <= 0){
            const c = confirm('Bạn có muốn xoá sản phẩm không')
            if(c) {
                getLocal.splice(i, 1)
            } else {
                e.quantity =1
            }
        }
        localStorage.setItem("ProductIncart",JSON.stringify(getLocal));
    })
    renderCart()
}





