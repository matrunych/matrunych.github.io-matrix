let i, j;
let root = document.getElementById("root");

for (i = 1; i <= 9; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    root.appendChild(row);

    for (j = 1; j <= 9; j++) {
        let cell = document.createElement("div");
        
        let cellClass = (i==j ? "cell-main"
                        : i < j ? "cell-omain"
                        : "cell-umain")

        cell.setAttribute("class", "cell "+ cellClass);
        cell.innerText = i * j;
        row.appendChild(cell);
    }
    
}
