const musicBand = [
    {
        id: 1,
        avatar: 'img/BT^.jpg',
        name: 'BT3',
        Price: '1000$'
    },
    {
        id: 2,
        avatar: 'img/BT5.jpg',
        name: 'BT4',
        Price: '2000$'
    },
    {
        id: 3,
        avatar: 'img/BT6.webp',
        name: 'BT5',
        Price: '4000$'
    },
    {
        id: 4,
        avatar: 'img/buc-tuong-3-1489809556372.webp',
        name: 'BT5',
        Price: '3000$'
    },
    {
        id: 5,
        avatar: 'img/BT4.jpg',
        name: 'BT6',
        Price: '5000$'
    },
]

function renderData(data) {
    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");

    let contentTbody = "";

    data.forEach((band,index) => {
        contentTbody += `<tr>
            <td>${index + 1}</td>
            <td><img src="${band.avatar}" alt="" srcset=""></td>
            <td>${band.name}</td>
            <td>${band.Price}</td>
            <td>
                <button onclick = "handleEdit('${band.id}')">Edit</button>
                <button onclick = "handleDelete('${band.id}')">Delete</button>
            </td>
        </tr>`;
    });
    tbody.innerHTML = contentTbody;
}
renderData(musicBand);

function handleSearch2(value) {
    const dataSearch = musicBand.filter(
        (band) =>
            band.name.toLowerCase().includes(value.toLowerCase()) ||
            band.Price.toLowerCase().includes(value.toLowerCase())
    );
    renderData(dataSearch);
}

function handleSearch() {
    const valueSearch = document.querySelector("#input-search").value;
    console.log(valueSearch);

    const dataSearch = [];
    musicBand.forEach((item) => {
        if (
            item.name.toLowerCase().includes(valueSearch.toLowerCase()) ||
            item.Price == valueSearch
        ) {
            dataSearch.push(item)
        }
    });
    console.log("",dataSearch);
    renderData(dataSearch);
}

function handleDelete(id) {
    console.log(id);
    musicBand.forEach((band,index) => {
        if(band.id == id) {
            musicBand.splice(index,1);
        }
    });
    renderData(musicBand);
}

function handleEdit(id) {
    let bandFind;
    musicBand.forEach((band) => {
        if(band.id == id) {
            bandFind = band;
            return;
        }
    });

    const name = document.querySelector("#name");
    const avatar = document.querySelector("#avatar");
    const price = document.querySelector("#price");
    const idInput = document.querySelector("#id-user");

    name.value = bandFind.name;
    price.value = bandFind.Price;
    idInput.value = bandFind.id;

    handleToggle();
}


function handleToggle(element) {
    const getform = document.querySelector('#form');
    
    if(!getform.style.display || getform.style.display === "none") {
        getform.style.display = "block";
    }else {
        getform.style.display = "none";
    }
}

function handleAddUser() {
    const id = document.querySelector("#id-user");
    const avatar = document.querySelector("#avatar");
    const name = document.querySelector("#name");
    const price = document.querySelector("#price");

    const ticket =  {
        id: id.value,
        name: name.value,
        avatar: avatar.value,
        Price: price.value,
    };
    console.log(id);

    musicBand.push(ticket);
    renderData(musicBand);
    handleToggle();
    name.value = "";
    avatar.value = "";
    price.value = "";
}