
function pushEdit(tbkey) {
    for (var key in localStorage) {
        if (key == tbkey) {
            let firstname = document.getElementById("firstname").value;
            let lastname = document.getElementById("lastname").value;
            let email = document.getElementById("email").value;
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let group = document.getElementById("group").value;

            localStorage[key] = JSON.stringify({
                        Firstname: firstname,
                        Lastname: lastname,
                        Email: email,
                        Username : username,
                        Password : password,
                        Group : group
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

editGlobal = false;

function emptyTable() {
    mytable = "<thead>" + "<tr>" 
            + "<th>" + "First Name" + "</th>"
            + "<th>" + "Last Name" + "</th>" 
            + "<th>" + "Email" + "</th>" 
            + "<th>" + "Username" + "</th>" 
            + "<th>" + "Password" + "</th>" 
            + "<th>" + "Group" + "</th>"
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
        if (storageTemp.hasOwnProperty('Email')){
            if (editkey == key.toString()){
                mytable += `<td><input id="firstname" name="firstname" type="text" value="` + storageTemp.Firstname + `"></td>`;
                mytable += `<td><input id="lastname" name="lastname" type="text" value="` + storageTemp.Lastname + `"></td>`;
                mytable += `<td><input id="email" name="email" type="text" value="` + storageTemp.Email + `"></td>`;
                mytable += `<td><input id="username" name="username" type="text" value="` + storageTemp.Username + `"></td>`;
                mytable += `<td><input id="password" name="password" type="text" value="` + storageTemp.Password + `"></td>`;
                mytable += `<td><input id="group" name="group" type="text" value="` + storageTemp.Group + `"></td>`;
                mytable += "<td>" + `<a href="#" onClick="pushEdit('` + key.toString() + `')">Submit</a> <a href="#" onClick="location.reload()">Cancel</a>` + "</td>";
            } 
            else {
                mytable += "<td>" + storageTemp.Firstname + "</td>";
                mytable += "<td>" + storageTemp.Lastname + "</td>";
                mytable += "<td>" + storageTemp.Email + "</td>";
                mytable += "<td>" + storageTemp.Username + "</td>";
                mytable += "<td>" + storageTemp.Password + "</td>";
                mytable += "<td>" + storageTemp.Group + "</td>";
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
        if (storageTemp.hasOwnProperty('Email')){
                mytable += "<td>" + storageTemp.Firstname + "</td>";
                mytable += "<td>" + storageTemp.Lastname + "</td>";
                mytable += "<td>" + storageTemp.Email + "</td>";
                mytable += "<td>" + storageTemp.Username + "</td>";
                mytable += "<td>" + storageTemp.Password + "</td>";
                mytable += "<td>" + storageTemp.Group + "</td>";
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


