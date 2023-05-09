const getProdcut = JSON.parse(localStorage.getItem("book"));

function renderBooks(getProdcut) {
    const listBooks = document.querySelector("#table_books_admin");
 
    let contentBooks = `
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name Product</th>
            <th scope="col">Price Product</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
    `;
    getProdcut.forEach((product,index) => {
        contentBooks += `
        <tbody>
            <tr>
                <th scope="row">${index + 1}</th>
                <td><img src="${product.img}" ></td>
                <td>${product.name}</td>
                <td>$${product.price}.00</td>
                <td id="icon-action">
                    <i class="fa-solid fa-plus" onclick="handleCreate(${product.id})"></i>
                    <i class="fa-solid fa-delete-left" onclick="handleDelete(${product.id})"></i>
                    <i class="fa-solid fa-pen-to-square" onclick="handleEdit(${product.id})"></i>
                </td>
            </tr>
        </tbody>
        `;
    });
    listBooks.innerHTML = contentBooks;
}
renderBooks(getProdcut);

// Render end

function handleSearch() {
    const inputSearch = document.querySelector("#input-search").value;
    
    const dataSearch = [];
    getProdcut.forEach((product) => {
        if (
            product.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
            product.price == Number(inputSearch)
        ) {
            dataSearch.push(product);
        }
    });
    renderBooks(dataSearch); 
}

// search end

function handleDelete(id) {
    const productlistDB  = JSON.parse(localStorage.getItem("book")) || []; 
    
    productlistDB.forEach((product,index) => {
        if(product.id == id) {
            productlistDB.splice(index,1);
        }
    })
    localStorage.setItem("book",JSON.stringify(productlistDB));
    renderBooks(productlistDB);
}
// Delete end


// Edit start
// Bật form
function handleEdit(id) {
    let objectProduct = JSON.parse(localStorage.getItem("book"));   
    const getValueForm = document.querySelector(".form-edit");
    document.querySelector(".fa-xmark").onclick = () => {
        getValueForm.style.display = "none";
    }
    if (getValueForm.style.display === "none") {
        getValueForm.style.display = "block";
    } else {
        getValueForm.style.display = "none";
    }
    objectProduct.forEach(object => {
        if (object.id == id) {
          const idEdit = document.querySelector("#id-user");
          const nameEdit = document.querySelector("#namebook");
          const priceEdit = document.querySelector("#pricebook");
          const avatar = document.querySelector("#avatar");
          idEdit.value = object.id;
          nameEdit.value = object.name;
          priceEdit.value = object.price;
        }
    })
}


// Update 
function handelUpdate() {
    let objectProduct = JSON.parse(localStorage.getItem("book"));
    const idEdit = document.querySelector("#id-user");
    const imageEdit = document.querySelector("#avatar");
    const nameEdit = document.querySelector("#namebook");
    const priceEdit = document.querySelector("#pricebook");
    Update = {
        id : Number(idEdit.value),
        img : "images/" + imageEdit.value.slice(12),
        name : nameEdit.value,
        price : priceEdit.value,
};
objectProduct.forEach((object, index) => {
    if (object.id == Update.id) {
        objectProduct.splice(index, 1, Update);
    }
})

localStorage.setItem("book", JSON.stringify(objectProduct));
renderBooks(objectProduct);
}

// Edit End

// Create Start

function handleCreate() {   
    const getValueForm = document.querySelector(".form-edit");
    document.querySelector(".fa-xmark").onclick = () => {
        getValueForm.style.display = "none";
    }
    if (getValueForm.style.display === "block") {
        getValueForm.style.display = "none";
    } else {
        getValueForm.style.display = "block";
    }
}

function handelUpdate() {
    const getData = JSON.parse(localStorage.getItem("book"))
    // const idValue = document.querySelector("#id-user").value;
    const avatar = document.querySelector("#avatar");
    const name = document.querySelector("#namebook");
    const price = document.querySelector("#pricebook");
    
    
    const newObject = {};
    newObject.id = getData[getData.length-1].id + 1;
    newObject.img = "/images/" + avatar.value.slice(12);
    newObject.name = name.value;
    newObject.price = price.value;
   
    getData.push(newObject);

    localStorage.setItem("book",JSON.stringify(getData));
    renderBooks(getData);
}

// Create End



  
  





