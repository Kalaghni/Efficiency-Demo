function allStorage() { //Get data from local storage

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

let mountains = allStorage().map(JSON.parse); //Convert local storage to objects
console.log(mountains);


var saleCustTable = "<thead>" + "<tr>"+ "<th>" + "Customer Phone" + "</th>"
                                + "<th>" + "Customer Name" + "</th>"
                                + "<th>" + "Date" + "</th>"
                                + "<th>" + "Type" + "</th>"
                                + "<th>" + "Employee Name" + "</th>"
                                + "<th>" + "Sub-Total" + "</th>"
                                + "<th>" + "Tax" + "</th>"
                                + "<th>" + "Total" + "</th>"
                                + "</tr>" + "</thead>" + "<tbody>";

for (var key in mountains){
//console.log(key);
    saleCustTable += "<tr>"
    if (mountains[key].hasOwnProperty("Date")){
        console.log(mountains[key].FirstName);
        saleCustTable += "<td>" + mountains[key].Phone +  "</td>";
        saleCustTable += "<td>" + mountains[key].customername + "</td>";
        saleCustTable += "<td>" + mountains[key].Date + "</td>";
        saleCustTable += "<td>" + mountains[key].Type + "</td>";
        saleCustTable += "<td>" + mountains[key].EmpName + "</td>";
        saleCustTable += "<td>" + mountains[key].SubTotal + "</td>";
        saleCustTable += "<td>" + mountains[key].Tax + "</td>";
        saleCustTable += "<td>" + mountains[key].Total + "</td>";
    }
    saleCustTable += "</tr>"
}
                                
saleCustTable += "</tbody>"
document.getElementById("datatablesSimple").innerHTML = saleCustTable;

//sale equipment
var saleEquipmentTable = "<thead>" + "<tr>" 
                       + "<th>" + "Name" + "</th>" 
                       + "<th>" + "Quantity" + "</th>" 
                       + "<th>" + "Price" + "</th>" 
                       + "</tr>" + "</thead>" + "<tbody>";

for (var key in mountains){
    saleEquipmentTable += "<tr>"
    if (mountains[key].hasOwnProperty('Quantity')){
        saleEquipmentTable += "<td>" + mountains[key].Name + "</td>";
        saleEquipmentTable += "<td>" + mountains[key].Quantity + "</td>";
        saleEquipmentTable += "<td>" + mountains[key].Price + "</td>";
    }    
    saleEquipmentTable += "</tr>"
}

saleEquipmentTable += "</tbody>"
document.getElementById("SaleEquipTable").innerHTML = saleEquipmentTable;