let year = parseInt(prompt("Enter a year"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " Là Năm Nhuận");
        } else {
                alert(year + " Là Năm 0 Nhuận");
            }
    } else {
            alert(year + " Là Năm Nhuận");
    }
} else {
        alert(year + " Là Năm Không Nhuận");
}
    