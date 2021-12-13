function pushEdit(tbkey) {
    for (var key in localStorage) {
        if (key == tbkey) {
            let name = document.getElementById("name").value;
            let brand = document.getElementById("brand").value;
            let type = document.getElementById("type").value;
            let manufacture = document.getElementById("manufacture").value;
            let serial_number = document.getElementById("serialnumber").value;
            let m_number = document.getElementById("manufacture_number").value;
            let owner = document.getElementById("ownerddl").value;
            let description = document.getElementById("description").value;

            localStorage[key] = JSON.stringify({
                Name: name,
                Brand: brand,
                Type: type,
                Manufacture: manufacture,
                SerialNumber: serial_number,
                ProductNumber: m_number,
                CustomerID: owner,
                Description: description
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
    mytable = "<thead>" + "<tr>" + "<th>" + "Name" + "</th>" 
            + "<th>" + "Brand" + "</th>" 
            + "<th>" + "Equipment Type" + "</th>" 
            + "<th>" + "Manufacturer" + "</th>" 
            + "<th>" + "S/N" + "</th>" 
            + "<th>" + "M/N" + "</th>" 
            + "<th>" + "Customer" + "</th>" 
            + "<th>" + "Description" + "</th>"  
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
            if (storageTemp.hasOwnProperty('Description')){
                let customerName = "None";
                for (var key2 in localStorage) {
                    storageTemp2 = JSON.parse(localStorage[key2]);
                    try {
                        if (storageTemp2.hasOwnProperty("Mobile") && storageTemp2.ID == storageTemp.CustomerID) {
                            customerName = storageTemp2.FirstName + " " + storageTemp2.LastName;
                            break;
                        }
                    }
                    catch {}
                }
                if (editkey == key.toString()){
                    mytable += `<td><input id="name" name="name" type="text" value="` + storageTemp.Name + `"></td>`;
                    mytable += `<td><input id="brand" name="brand" type="text" value="` + storageTemp.Brand + `"></td>`;
                    mytable += `<td><input id="type" name="type" type="text" value="` + storageTemp.Type + `"></td>`;
                    mytable += `<td><input id="manufacture" name="manufacture" type="tel" value="` + storageTemp.Manufacture + `"></td>`;
                    mytable += `<td><input id="serialnumber" name="serialnumber" type="text" value="` + storageTemp.SerialNumber + `"></td>`;
                    mytable += `<td><input id="manufacture_number" name="manufacture_number" type="text" value="` + storageTemp.ProductNumber + `"></td>`;
                    let ownerddl = `<option value=0>None</option>`;
                    for (var key3 in localStorage) {
                        try{
                            var storageTemp3 = JSON.parse(localStorage[key3]);
                            if (storageTemp3.hasOwnProperty('Mobile')) {
                                ownerddl += `<option value="` + storageTemp3.ID +`">` + storageTemp3.FirstName + " " + storageTemp3.LastName + `</option>`;
                            }
                        }
                        catch {}
                    }
                    mytable += `<td><select id="ownerddl"` + ownerddl + `</select></td>`;
                    mytable += `<td><input id="description" name="description" type="text" value="` + storageTemp.Description + `"></td>`;
                    mytable += "<td>" + `
                        <a class="crud-green" onClick="pushEdit('` + editkey.toString() + `')">Submit</a> 
                        <a class="crud-red" onClick="location.reload()">Cancel</a>` + 
                    "</td>";
                } 
                else {
                    mytable += "<td>" + storageTemp.Name + "</td>";
                    mytable += "<td>" + storageTemp.Brand + "</td>";
                    mytable += "<td>" + storageTemp.Type + "</td>";
                    mytable += "<td>" + storageTemp.Manufacture + "</td>";
                    mytable += "<td>" + storageTemp.SerialNumber + "</td>";
                    mytable += "<td>" + storageTemp.ProductNumber + "</td>";
                    mytable += "<td>" + customerName + "</td>";        
                    mytable += "<td>" + storageTemp.Description + "</td>";
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
        if (storageTemp.hasOwnProperty('Description')){
            mytable += "<td>" + storageTemp.Name + "</td>";
            mytable += "<td>" + storageTemp.Brand + "</td>";
            mytable += "<td>" + storageTemp.Type + "</td>";
            mytable += "<td>" + storageTemp.Manufacture + "</td>";
            mytable += "<td>" + storageTemp.SerialNumber + "</td>";
            mytable += "<td>" + storageTemp.ProductNumber + "</td>";
            mytable += "<td>" + customerName + "</td>";        
            mytable += "<td>" + storageTemp.Description + "</td>";
            mytable += "<td>" + `
                <a class="crud-green" onClick="onLoad('` + key.toString() + `')">Edit</a> 
                <a class="crud-red" onClick="onDelete('` + key + `')">Delete</a>` + 
            "</td>";
            let customerName = "None";
            for (var key2 in localStorage) {
                storageTemp2 = JSON.parse(localStorage[key2]);
                try {
                    if (storageTemp2.hasOwnProperty("Mobile") && storageTemp2.ID == storageTemp.CustomerID) {
                        customerName = storageTemp2.FirstName + " " + storageTemp2.LastName;
                        break;
                    }
                }
                catch {
                }
                
            }
            
        }
        mytable += "</tr>"
    }
    catch{}
}
mytable += "</tbody>"
document.getElementById("datatablesSimple").innerHTML = mytable;
