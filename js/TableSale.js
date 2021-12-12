

var saleCustTable = "<thead>" + "<tr>"+ "<th>" + "Employee Name" + "</th>"
                                + "<th>" + "Customer Name" + "</th>"
                                + "<th>" + "Date" + "</th>"
                                + "<th>" + "Type" + "</th>"
                                + "</tr>" + "</thead>" + "<tbody>";

for (var key in localStorage){
//console.log(key);
try{
        saleCustTable += "<tr>"
        var storageTemp = JSON.parse(localStorage[key]);
        let customername = "";
        let employeename = "";
        if (storageTemp.hasOwnProperty("EmployeeID")){
            for(var key2 in localStorage) {
                var storageTemp2 = JSON.parse(localStorage[key2]);
                if (storageTemp2.hasOwnProperty('Mobile') && storageTemp2.ID == storageTemp.CustomerID) {
                    customername = storageTemp2.FirstName + " " + storageTemp2.LastName;
                }
            }

            for(var key3 in localStorage) {
                var storageTemp3 = JSON.parse(localStorage[key3]);
                if (storageTemp3.hasOwnProperty('Email') && storageTemp3.ID == storageTemp.EmployeeID) {
                    employeename = storageTemp3.Firstname + " " + storageTemp3.Lastname;
                }
            }

            saleCustTable += "<td>" + customername +  "</td>";
            saleCustTable += "<td>" + employeename + "</td>";
            saleCustTable += "<td>" + storageTemp.Date + "</td>";
            saleCustTable += "<td>" + storageTemp.Type + "</td>";

        }
        saleCustTable += "</tr>"
    }
    catch {}
}
                                
saleCustTable += "</tbody>"
document.getElementById("datatablesSimple").innerHTML = saleCustTable;
