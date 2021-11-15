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


var mytable = "<thead>" + "<tr>"+ "<th>" + "Customer Phone Number" + "</th>" 
                                + "<th>" + "Employee Name" + "</th>" 
                                + "</tr>" + "</thead>" + "<tbody>"

for (var key in mountains){
    //console.log(key);
    mytable += "<tr>"
    if (mountains[key].hasOwnProperty('Customer')){
        console.log(mountains[key].FirstName);
        mytable += "<td>" + mountains[key].Customer + "</td>";
        mytable += "<td>" + mountains[key].Name + "</td>";
    }
    mytable += "</tr>"
}

mytable += "</tbody>"

document.getElementById("SaleTable").innerHTML = mytable;

