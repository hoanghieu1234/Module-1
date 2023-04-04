function bangcuuchuong () {
    let contentTable = " ";
    for (let row = 1; row <= 10; row ++) {
        contentTable += "<tr>";
        for (let cols = 2; cols <=9; cols ++) {
            contentTable += `<td>${cols} x ${row} = ${cols * row}</td>`
        }
        contentTable += "</tr>";
    }
    const table = document.querySelector('#table');
    table.innerHTML = contentTable;
}
bangcuuchuong();

