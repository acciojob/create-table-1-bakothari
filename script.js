
function insert_Row() {
let table = document.getElementById("sampleTable");
let tableRow = document.createElement("tr");
let tabelcol1 = document.createElement("td");
let tabelcol2 = document.createElement("td");
tableRow.append(tabelcol1,tabelcol2)
table.prepend(tableRow);
    tabelcol1.textContent = "New Cell1";
    tabelcol2.textContent = "New Cell2" 

}