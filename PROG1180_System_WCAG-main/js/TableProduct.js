function pushEdit(tbkey) {
    for (var key in localStorage) {
        if (key == tbkey) {
            let id = JSON.parse(localStorage[key]).ID;
            let desc = document.getElementById("desc").value;
            let name = document.getElementById("name").value;
            let stock = document.getElementById("stock").value;
            let color = document.getElementById("color").value;
            let itemnumber = document.getElementById("itemnumber").value;
            let unitprice = document.getElementById("unitprice").value;

            localStorage[key] = JSON.stringify({
                ID: id,
                Desc: desc,
                Name: name,
                Stock: stock,
                Color: color,
                ItemNumber: itemnumber,
                UnitPrice: unitprice
            });
        }
    }
    location.reload();
}

function onDelete(tbkey) {
    if (confirm('Are you sure to delete this record ?')) {
        delete localStorage[tbkey];   
        location.reload();
    }
}

let editGlobal = false;

function emptyTable() {
    mytable = "<thead>" + "<tr>" + "<th>" + "Description" + "</th>" 
            + "<th>" + "Name" + "</th>" 
            + "<th>" + "Stock" + "</th>" 
            + "<th>" + "Color" + "</th>" 
            + "<th>" + "Item Number" + "</th>" 
            + "<th>" + "Unit Price" + "</th>" 
            + "<th>" + "Edit/Delete" + "</th>" 
            + "</tr>" + "</thead>" + "<tbody>"
}

//spawn table
var mytable;
emptyTable();

function onLoad(editkey) {
    emptyTable();
    for (var key in localStorage){
        mytable += "<tr>"
        try {
            storageTemp = JSON.parse(localStorage[key]);
            if (storageTemp.hasOwnProperty('Desc')){
                if (editkey == key.toString()){
                    mytable += `<td><input id="desc" name="desc" type="text" value="` + storageTemp.Desc + `"></td>`;
                    mytable += `<td><input id="name" name="name" type="text" value="` + storageTemp.Name + `"></td>`;
                    mytable += `<td><input id="stock" name="stock" type="number" value="` + storageTemp.Stock + `"></td>`;
                    mytable += `<td><input id="color" name="color" type="text" value="` + storageTemp.Color + `"></td>`;
                    mytable += `<td><input id="itemnumber" name="itemnumber" type="number" value="` + storageTemp.ItemNumber + `"></td>`;
                    mytable += `<td><input id="unitprice" name="unitprice" type="number" value="` + storageTemp.UnitPrice + `"></td>`;
                    mytable += "<td>" + `
                        <a class="crud-green" onClick="pushEdit('` + editkey.toString() + `')">Submit</a> 
                        <a class="crud-red" onClick="location.reload()">Cancel</a>` + 
                    "</td>";
                } 
                else {
                    mytable += "<td>" + storageTemp.Desc + "</td>";
                    mytable += "<td>" + storageTemp.Name + "</td>";
                    mytable += "<td>" + storageTemp.Stock + "</td>";
                    mytable += "<td>" + storageTemp.Color + "</td>";
                    mytable += "<td>" + storageTemp.ItemNumber + "</td>";
                    mytable += "<td>" + storageTemp.UnitPrice + "</td>";
                    mytable += "<td></td>";
                }
                
            }
            mytable += "</tr>"
        }
        catch{}
    }
    mytable += "</tbody>"
    document.getElementById("datatablesSimple").innerHTML = mytable;
}

for (var key in localStorage){
    mytable += "<tr>"
    try {
        storageTemp = JSON.parse(localStorage[key]);
        if (storageTemp.hasOwnProperty('Desc')){
            mytable += "<td>" + storageTemp.Desc + "</td>";
            mytable += "<td>" + storageTemp.Name + "</td>";
            mytable += "<td>" + storageTemp.Stock + "</td>";
            mytable += "<td>" + storageTemp.Color + "</td>";
            mytable += "<td>" + storageTemp.ItemNumber + "</td>";
            mytable += "<td>" + storageTemp.UnitPrice + "</td>";
            mytable += "<td>" + `
                <a class="crud-green" onClick="onLoad('` + key.toString() + `')">Edit</a> 
                <a class="crud-red" onClick="onDelete('` + key + `')">Delete</a>` + 
            "</td>";
        }
        mytable += "</tr>"
    }
    catch{}
}
mytable += "</tbody>"
document.getElementById("datatablesSimple").innerHTML = mytable;
