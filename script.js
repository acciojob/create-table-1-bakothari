function insert_Row() {
    let table = document.getElementById("sampleTable");
    let tableRow = document.createElement("tr");

    let tableCol1 = document.createElement("td");
    let tableCol2 = document.createElement("td");

    // Ensure proper text setting
    tableCol1.innerHTML = "New Cell1";
    tableCol2.innerHTML = "New Cell2";

    tableRow.appendChild(tableCol1);
    tableRow.appendChild(tableCol2);

    // Insert at the top
    table.insertBefore(tableRow, table.firstChild);
}
