function insert_Row() {
    let table = document.getElementById("sampleTable");
    let tableRow = table.insertRow(0); // Insert new row at position 0
    let tabelcol1 = tableRow.insertCell(0); // Insert new cell at position 0 of the new row
    let tabelcol2 = tableRow.insertCell(1); // Insert new cell at position 1 of the new row
    tabelcol1.textContent = "New Cell1";
    tabelcol2.textContent = "New Cell2";
}