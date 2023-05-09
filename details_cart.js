const url = new URL(document.URL);
const id = url.searchParams.get("id");

function localStorageGetItem(key) {
  const data = JSON.parse(localStorage.getItem(`${key}`)) ?? [];
  return data;
}
function localStorageSetItem(key, data) {
  localStorage.setItem(`${key}`, JSON.stringify(data));
}

function RenderDetail() {
  let books = JSON.parse(localStorage.getItem("book"));
  const elementDetail = document.querySelector("#name-details");
  const elementImage = document.querySelector("#img-details");
  const elementPrice = document.querySelector("#price-details");
  let contentDetail = "";
  let contentImage = "";
  let contentPrice = "";
  books.forEach((element) => {
    if (element.id == id) {
      contentImage += `
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src="${element.img}"
                    class="w-100" />
                    <a href="#!">
                    <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </div>
                    </a>
                </div>
            `;

      contentDetail += `
                <div class="col-md-6 col-lg-6 col-xl-6">
                    <h3>${element.name}</h3>
                    <div class="d-flex flex-row">
                    <div class="text-danger mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <span>310</span>
                    </div>
                    <div class="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span class="text-primary"> • </span>
                    <span>Light weight</span>
                    <span class="text-primary"> • </span>
                    <span>Best finish<br /></span>
                    </div>
                    <div class="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span class="text-primary"> • </span>
                    <span>For men</span>
                    <span class="text-primary"> • </span>
                    <span>Casual<br /></span>
                    </div>
                </div>
            `;

      contentPrice += `
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-centermb-1" style="gap:1rem;" >
                        <h4 class="mb-1 me-1">$${element.price}.00</h4>
                        <span class="text-danger"style="font-size:1.5rem">$20.99</span>
                    </div>
                    <div class="d-flex flex-column mt-4">
                    <button class="btn btn-primary btn-sm" type="button" style="width:150px">Details</button>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button" style="width:150px" id="btn-add-cart" onclick="handleAddCard(${element.id})">
                        Add to cart
                    </button>
                    </div>
                </div>
            `;
    }
  });

  elementDetail.innerHTML = contentDetail;
  elementImage.innerHTML = contentImage;
  elementPrice.innerHTML = contentPrice;
}
RenderDetail();

// Add to cart
// Lấy dữ liệu từ button cart

function handleAddCard(element) {
  cartsNumber(element);
  setItem(element);
  handleAddQuantity(element)
}

// Render để không mất số trên thanh Bag
function renderCartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
    document.querySelector(".shopping .quantity").textContent = productNumber;
  }
}
renderCartNumber();
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
//Cộng inCart vào Local
function setItem(element) {
  
  let getProduct = JSON.parse(localStorage.getItem("book"));
  let dataFind = getProduct.find((item, index) => item.id == element);
  let ebook = {
    id: "",
    image: "",
    name: "",
    price: "",
    quantity: "",
};

  let cartItems = localStorageGetItem("ProductIncart");
  let isDulicate = false;
  if (cartItems) {
    {
      cartItems.forEach((item) => {
        if (element == item.id) {
          isDulicate = true;
        }
      });
      if(isDulicate)
      {
        dataFind.quantity = Number(dataFind.quantity) + 1;
        localStorageSetItem("ProductIncart",cartItems);
      }
      else
      {
        ebook = {
            id: dataFind.id,
            image:dataFind.img,
            name:dataFind.name,
            price:dataFind.price,
            quantity: 0
        }
        cartItems.push(ebook);
        localStorageSetItem("ProductIncart",cartItems);
      }
    }
  }
}



function handleAddQuantity(id) {
  let getProductCart = JSON.parse(localStorage.getItem("ProductIncart"));
  getProductCart.forEach((item,index)=>{
      if(item.id === id) {
        item.quantity = Number(item.quantity) + 1;
      }
  })
  localStorage.setItem("ProductIncart",JSON.stringify(getProductCart));
}
