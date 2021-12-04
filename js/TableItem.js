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

//Convert local storage to objects
let mountains = allStorage().map(JSON.parse);
console.log(mountains);

var mytable = "<thead>" + "<tr>" + "<th>" + "Name" + "</th>" 
            + "<th>" + "Brand" + "</th>" 
            + "<th>" + "Equipment Type" + "</th>" 
            + "<th>" + "Manufacturer" + "</th>" 
            + "<th>" + "S/N" + "</th>" 
            + "<th>" + "M/N" + "</th>" 
            + "<th>" + "Description" + "</th>"  
            + "</tr>" + "</thead>" + "<tbody>"

for (var key in mountains){
    //console.log(key);
    mytable += "<tr>"
    if (mountains[key].hasOwnProperty('Description')){
        console.log(mountains[key].FirstName);
        mytable += "<td>" + mountains[key].Name + "</td>";
        mytable += "<td>" + mountains[key].Brand + "</td>";
        mytable += "<td>" + mountains[key].Type + "</td>";
        mytable += "<td>" + mountains[key].Manufacture + "</td>";
        mytable += "<td>" + mountains[key].SerialNumber + "</td>";
        mytable += "<td>" + mountains[key].ProductNumber + "</td>";
        mytable += "<td>" + mountains[key].Description + "</td>";
    }
    mytable += "</tr>"
}

mytable += "</tbody>"
document.getElementById("datatablesSimple").innerHTML = mytable;