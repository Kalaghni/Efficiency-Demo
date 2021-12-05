var custArray = ["firstname", "middlename", "lastname", "phone", "streetnumber", "streetname", "city", "state", "zip"];
var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    custArray.forEach((item) => {
        formData[item] = document.getElementById(item).value;
    });
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("datatablesSimple").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.middlename;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.streetnumber;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.streetname;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.city;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.state;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.zip;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a href="#" onClick="onEdit(this)">Edit</a>`;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<a href="#" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    custArray.forEach((item) => {
        document.getElementById(item).value = "";
    })
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    custArray.forEach((item, index) => {
        document.getElementById(item).value = selectedRow.cells[index].innerHTML;
    })
}
function updateRecord(formData) {
    custArray.forEach((item, index) => {
        var thName = eval(`formData.${item}`)
        selectedRow.cells[index].innerHTML = thName;
    })
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("datatablesSimple").deleteRow(row.rowIndex);
        resetForm();
    }
}

//DATA TABLE FROM LOCAL STORAGE
/*
function allStorage() { 

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    //console.log(localStorage);

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

let mountains = allStorage().map(JSON.parse); //Convert local storage to objects
//console.log(mountains);

//spawn table
var mytable = "<thead>" + "<tr>" 
            + "<th>" + "First Name" + "</th>"
            + "<th>" + "Middle Name" + "</th>" 
            + "<th>" + "Last Name" + "</th>" 
            + "<th>" + "Phone Number" + "</th>" 
            + "<th>" + "Street Number" + "</th>" 
            + "<th>" + "Street Name" + "</th>" 
            + "<th>" + "City" + "</th>" 
            + "<th>" + "State" + "</th>" 
            + "<th>" + "Zip Code" + "</th>" 
            + "</tr>" + "</thead>" + "<tbody>"


//Fill data into the table
for (var key in mountains){
	mytable += "<tr>"
	if (mountains[key].hasOwnProperty('FirstName')){
		mytable += "<td>" + mountains[key].FirstName + "</td>";
		mytable += "<td>" + mountains[key].MiddleName + "</td>";
		mytable += "<td>" + mountains[key].LastName + "</td>";
		mytable += "<td>" + mountains[key].Mobile + "</td>";
		mytable += "<td>" + mountains[key].Street + "</td>";
		mytable += "<td>" + mountains[key].StreetName + "</td>";
        mytable += "<td>" + mountains[key].CityLocation + "</td>";
		mytable += "<td>" + mountains[key].StateLocation + "</td>";
		mytable += "<td>" + mountains[key].ZipCode + "</td>";
	}
	mytable += "</tr>"
}

mytable += "</tbody>"
document.getElementById("datatablesSimple").innerHTML = mytable;
*/