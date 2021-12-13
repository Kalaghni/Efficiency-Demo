

var saleCustTable = "<thead>" + "<tr>"+ "<th>" + "#" + "</th>"
+ "<th>" + "Employee Name" + "</th>"
+ "<th>" + "Customer Name" + "</th>"
+ "<th>" + "Date" + "</th>"
+ "<th>" + "Type" + "</th>"
+ "<th>" + "Products" + "</th>"
+ "</tr>" + "</thead>" + "<tbody>";

let saleid = 0;

function findInvoice() {

    var saleCustTable = "<thead>" + "<tr>"+ "<th>" + "#" + "</th>"
    + "<th>" + "Employee Name" + "</th>"
    + "<th>" + "Customer Name" + "</th>"
    + "<th>" + "Date" + "</th>"
    + "<th>" + "Type" + "</th>"
    + "<th>" + "Products" + "</th>"
    + "</tr>" + "</thead>" + "<tbody>";

    let saleid = document.getElementById("saleid").value;
    for (var key in localStorage){
        //console.log(key);
        try{
                saleCustTable += "<tr>"
                var storageTemp = JSON.parse(localStorage[key]);
                let customername = "";
                let employeename = "";
                let count = 0;
                let products = [{}];
                console.log(saleid);
                if (storageTemp.hasOwnProperty("EmployeeID") && storageTemp.ID == saleid){
                    
                    try {
                        for(var key2 in localStorage) {
                            var storageTemp2 = JSON.parse(localStorage[key2]);
                            if (storageTemp2.hasOwnProperty('Mobile') && storageTemp2.ID == storageTemp.CustomerID) {
                                customername = storageTemp2.FirstName + " " + storageTemp2.LastName;
                            }
                        }
                    }
                    catch {}
        
                    try {
                        for(var key3 in localStorage) {
                            var storageTemp3 = JSON.parse(localStorage[key3]);
                            if (storageTemp3.hasOwnProperty('Email') && storageTemp3.ID == storageTemp.EmployeeID) {
                                employeename = storageTemp3.Firstname + " " + storageTemp3.Lastname;
                            }
                        }
                    }
                    catch {}
        
                    try {
                        for(var key4 in localStorage) {
                            var storageTemp4 = JSON.parse(localStorage[key4]);
                            if (storageTemp4.hasOwnProperty('ProductID') && storageTemp4.SaleID == storageTemp.ID) {
                                try {
                                    for (var key5 in localStorage) {
                                   
                                    var storageTemp5  = JSON.parse(localStorage[key5]);
                                    if (storageTemp5.hasOwnProperty('Desc') && storageTemp4.ProductID == storageTemp5.ID) {
                                        count++;
                                        products[count] = {
                                            Name : storageTemp5.Name,
                                            Qty : storageTemp4.Qty
                                        }
                                    } 
                                   
                                }
                                
                                } catch {}
                                
                                
                                
                            }
                        }
                    }
                    catch {}
        
                    var productTxt = "";

                    saleCustTable += "<td>" + storageTemp.ID + "</td>";
                    saleCustTable += "<td>" + employeename +  "</td>";
                    saleCustTable += "<td>" + customername + "</td>";
                    saleCustTable += "<td>" + storageTemp.Date + "</td>";
                    saleCustTable += "<td>" + storageTemp.Type + "</td>";
                    try {
                        for (let i = 1; i <= count; i++) {
                        productTxt += products[i].Name + "  x " + products[i].Qty + "</br>";
                    }
                    }catch{}
                    
                    saleCustTable += "<td>" + productTxt + "</td>";
                    
        
                }
                saleCustTable += "</tr>"
            }
            catch {}
        }
                                        
        saleCustTable += "</tbody>"
        document.getElementById("datatablesSimple").innerHTML = saleCustTable;
}


