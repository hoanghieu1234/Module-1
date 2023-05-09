 
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


// Render Books

// const getProdcut = JSON.parse(localStorage.getItem("book"));

// function renderBooks(getProdcut) {
//     const listBooks = document.querySelector("#table_books_admin");
//     console.log(222,listBooks);
//     let contentBooks = `
//         <thead>
//             <tr>
//             <th scope="col">#</th>
//             <th scope="col">Image</th>
//             <th scope="col">Name Product</th>
//             <th scope="col">Price Product</th>
//             <th scope="col">Action</th>
//             </tr>
//         </thead>
//     `;
//     getProdcut.forEach((product,index) => {
//         contentBooks += `
//         <tbody>
//             <tr>
//                 <th scope="row">${index + 1}</th>
//                 <td>${product.img}</td>
//                 <td>${product.name}</td>
//                 <td>@${product.price}</td>
//                 <td id="icon-action">
//                     <i class="fa-solid fa-user-plus"></i>
//                     <i class="fa-solid fa-delete-left"></i>
//                 </td>
//             </tr>
//         </tbody>
//         `;
//     });
//     listBooks.innerHTML = contentBooks;
// }
// renderBooks(getProdcut);


