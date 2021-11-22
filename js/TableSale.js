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
console.log(mountains);


var saleTable = "<thead>" + "<tr>"+ "<th>" + "Customer Phone Number" + "</th>"
                                + "<th>" + "Customer Name" + "</th>"
                                + "<th>" + "Date" + "</th>"
                                + "<th>" + "Type" + "</th>"
                                + "<th>" + "Employee Name" + "</th>"
                                + "<th>" + "Sub-Total" + "</th>"
                                + "<th>" + "Tax" + "</th>"
                                + "<th>" + "Total" + "</th>"
                                + "</tr>" + "</thead>" + "<tbody>";

var equipmentTable = "<thead>" + "<tr>" + "<th>" + "Name" + "</th>" 
                                + "<th>" + "Quantity" + "</th>" 
                                + "<th>" + "Price" + "</th>" 
                                + "</tr>" + "</thead>" + "<tbody>";

for (var key in mountains){
    //console.log(key);
    mytable += "<tr>"
    if (mountains[key].hasOwnProperty('Customer')){
        console.log(mountains[key].FirstName);
        saletable += "<td>" + mountains[key].Customer + "</td>";
        saletable += "<td>" + mountains[key].Name + "</td>";
    }
    saletable += "</tr>"
}

saletable += "</tbody>"

document.getElementById("SaleTable").innerHTML = saletable;

