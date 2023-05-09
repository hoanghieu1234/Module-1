
const userDB = JSON.parse(localStorage.getItem("accounts"));

function renderUser(userDB) {
    const listUser = document.querySelector("#table_admin");
    
    let contentList = `
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Active</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
    `;
    userDB.forEach((user,index) => {
        contentList += `
            <tbody>
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${user.email}</td>
                    <td>
                        <button type="button" class="btn btn-danger" onclick="toggleButtonStatus()">InActive</button>
                        <button type="button" class="btn btn-success " onclick="toggleButtonStatus()">Active</button>
                    </td>
                    <td id="icon-action">
                        <i class="fa-solid fa-pen-to-square" id="edit-btn" onclick="toggleButtonStatus()"></i>
                    </td>
                </tr>
            </tbody>
        `;
    });
    listUser.innerHTML = contentList;
}

renderUser(userDB);

// Render End


function handleSearch() {

    const getValue = JSON.parse(localStorage.getItem("accounts")) || [];
    
    
    const getinputSearch = document.getElementById("input-search").value;
  
    let productSearch = getValue.filter(value => {
      return value.email.toUpperCase().includes(getinputSearch.toUpperCase());
    });
    renderUser(productSearch);
}


const inactiveButton = document.querySelector('.btn-danger');
const activeButton = document.querySelector('.btn-success');
function toggleButtonStatus() {
    
    ininactiveButton.classList.toggle('disabled');
    activeButton.classList.toggle('disabled');
    
}

