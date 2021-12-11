

function pushEdit(tbkey) {
    for (var key in localStorage) {
        if (key == tbkey) {
            let firstname = document.getElementById("firstname").value;
            let middlename = document.getElementById("middlename").value;
            let lastname = document.getElementById("lastname").value;
            let phone = document.getElementById("phone").value;
            let streetnumber = document.getElementById("streetnumber").value;
            let streetname = document.getElementById("streetname").value;
            let city = document.getElementById("city").value;
            let state = document.getElementById("state").value;
            let zip = document.getElementById("zip").value;

            localStorage[key] = JSON.stringify({
                        ID: localStorage.length,
                        Firstname: firstname,
                        Middlename: middlename,
                        Lastname: lastname,
                        Mobile: phone,
                        StreetNumber : streetnumber,
                        StreetName : streetname,
                        City: city,
                        State: state,
                        ZipCode: zip
            });
        }
    }
    location.reload();
}



function onDelete(tbkey) {
    if (confirm('Are you sure to delete this record ?')) {
        
        for (var key in localStorage) {
                try {
                    var Equipment = JSON.parse(localStorage[key]);
                    if (Equipment.hasOwnProperty('Description') && Equipment.CustomerID == JSON.parse(localStorage[tbkey]).ID) {
                        console.log('cascade deleted: ' + key);
                        delete localStorage[key];
                    }
                }
                catch {}
            
        } 
        delete localStorage[tbkey];   
        location.reload();
    }
}

let editGlobal = false;

function emptyTable() {
    mytable = "<thead>" + "<tr>" 
            + "<th>" + "First Name" + "</th>"
            + "<th>" + "Middle Name" + "</th>"
            + "<th>" + "Last Name" + "</th>" 
            + "<th>" + "Phone" + "</th>" 
            + "<th>" + "Street Number" + "</th>" 
            + "<th>" + "Street Name" + "</th>" 
            + "<th>" + "City" + "</th>"
            + "<th>" + "State" + "</th>"
            + "<th>" + "Zip" + "</th>"
            + "<th>" + "Edit/Delete" + "</th>" 
            + "</tr>" + "</thead>" + `<tbody>`;
}

//spawn table
var mytable;
emptyTable();

function onLoad(editkey) {
    emptyTable();
    if (localStorage.length > 0) {
    for (var key in localStorage){
    try {
        storageTemp = JSON.parse(localStorage[key]);
        mytable += "<tr>"
        if (storageTemp.hasOwnProperty('ZipCode')){
            if (editkey == key.toString()){
                mytable += `<td><input id="firstname" name="firstname" type="text" value="` + storageTemp.FirstName + `"></td>`;
                mytable += `<td><input id="middlename" name="middlename" type="text" value="` + storageTemp.MiddleName + `"></td>`;
                mytable += `<td><input id="lastname" name="lastname" type="text" value="` + storageTemp.LastName + `"></td>`;
                mytable += `<td><input id="phone" name="phone" type="tel" value="` + storageTemp.Mobile + `"></td>`;
                mytable += `<td><input id="streetnumber" name="streetnumber" type="text" value="` + storageTemp.StreetNumber + `"></td>`;
                mytable += `<td><input id="streetname" name="streetname" type="text" value="` + storageTemp.StreetName + `"></td>`;
                mytable += `<td><input id="city" name="city" type="text" value="` + storageTemp.City + `"></td>`;
                mytable += `<td><input id="state" name="state" type="text" value="` + storageTemp.State + `"></td>`;
                mytable += `<td><input id="zip" name="zip" type="text" value="` + storageTemp.ZipCode + `"></td>`;
                mytable += "<td>" + `<a href="#" onClick="pushEdit('` + key.toString() + `')">Submit</a> <a href="#" onClick="location.reload()">Cancel</a>` + "</td>";
            } 
            else {
                mytable += "<td>" + storageTemp.FirstName + "</td>";
                mytable += "<td>" + storageTemp.MiddleName + "</td>";
                mytable += "<td>" + storageTemp.LastName + "</td>";
                mytable += "<td>" + storageTemp.Mobile + "</td>";
                mytable += "<td>" + storageTemp.StreetNumber + "</td>";
                mytable += "<td>" + storageTemp.StreetName + "</td>";
                mytable += "<td>" + storageTemp.City + "</td>";
                mytable += "<td>" + storageTemp.State + "</td>";
                mytable += "<td>" + storageTemp.ZipCode + "</td>";
                mytable += "<td></td>"; 
            }      
        }
	    mytable += "</tr>"
    }
    catch {

    }
	
}
mytable += "</tbody>"
document.getElementById("datatablesSimple").innerHTML = mytable;
}
}
//Fill data into the table



if (!editGlobal) {
    if (localStorage.length > 0) {
        for (var key in localStorage){
            try {
                storageTemp = JSON.parse(localStorage[key]);
                mytable += "<tr>"
                if (storageTemp.hasOwnProperty('Mobile')){
                    mytable += "<td>" + storageTemp.FirstName + "</td>";
                    mytable += "<td>" + storageTemp.MiddleName + "</td>";
                    mytable += "<td>" + storageTemp.LastName + "</td>";
                    mytable += "<td>" + storageTemp.Mobile + "</td>";
                    mytable += "<td>" + storageTemp.StreetNumber + "</td>";
                    mytable += "<td>" + storageTemp.StreetName + "</td>";
                    mytable += "<td>" + storageTemp.City + "</td>";
                    mytable += "<td>" + storageTemp.State + "</td>";
                    mytable += "<td>" + storageTemp.ZipCode + "</td>";
                    mytable += "<td>" + `<a href="#" onClick="onLoad('` + key.toString() + `')">Edit</a> <a href="#" onClick="onDelete('` + key.toString() + `')">Delete</a>` + "</td>";   
                }
                mytable += "</tr>"
            }
            catch {

            }
        
        }
    mytable += "</tbody>"
    document.getElementById("datatablesSimple").innerHTML = mytable;
    }
}