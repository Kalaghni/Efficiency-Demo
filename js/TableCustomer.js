//Get data from local storage
function allStorage() { 

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
console.log(mountains);

//spawn table
var mytable = "<thead>" + "<tr>" 
    + "<th>" + "FirstName" + "</th>"
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
	//console.log(key);
	mytable += "<tr>"
	if (mountains[key].hasOwnProperty('FirstName')){
		console.log(mountains[key].FirstName);
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