/*
TO-DO: Fix table bootstrap
window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimples');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }*/

function allStorage() { //Get data from local storage

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    console.log(localStorage);

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

let mountains = allStorage().map(JSON.parse); //Convert local storage to objects
const data = ["FirstName", "MiddleName", "LastName","Mobile","Street","StreetName","CityLocation","StateLocation","ZipCode"];
console.log(mountains);




//for (let element of data) {
    //for (key in element) {
    	
    	/*for (const string of stringArray){
    		console.log(string)
    	}*/
        //let text = document.createTextNode(element[key]);

    //}



var mytable = "<thead>" + "<tr>" + "<th>" + "FirstName" + "</th>" + "<th>" + "Middle Name" + "</th>" + "<th>" + "Last Name" + "</th>" + "<th>" + "Phone Number" + "</th>" + "<th>" + "Street Number" + "</th>" + "<th>" + "Street Name" + "</th>" + "<th>" + "City" + "</th>" + "<th>" + "State" + "</th>" + "<th>" + "Zip Code" + "</th>" + "</tr>" + "</thead>" + "<tbody>"

for (var key in mountains){
	//console.log(key);
	mytable += "<tr>"
	if (mountains[key].hasOwnProperty('FirstName')){
		console.log(mountains[key].FirstName);
		mytable += "<td>" + mountains[key].FirstName + "</td>";
		mytable += "<td>" + mountains[key].MiddleName + "</td>";
		mytable += "<td>" + mountains[key].LastName + "</td>";
		mytable += "<td>" + mountains[key].Mobile + "</td>";
		mytable += "<td>" + mountains[key].StateLocation + "</td>";
		mytable += "<td>" + mountains[key].Street + "</td>";
		mytable += "<td>" + mountains[key].StreetName + "</td>";
		mytable += "<td>" + mountains[key].ZipCode + "</td>";
	}
	mytable += "</tr>"
}

mytable += "</tbody>"

document.getElementById("datatablesSimple").innerHTML = mytable;
