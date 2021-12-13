

let saleid = 0;

function findInvoice() {

    var saleCustTable = "";

    let saleid = document.getElementById("saleid").value;
    for (var key in localStorage){
        //console.log(key);
        try{
                saleCustTable += "<p>"
                var storageTemp = JSON.parse(localStorage[key]);
                let customername = "";
                let employeename = "";
                let custadd = "";
                let custphone = "";
                let count = 0;
                let products = [{}];
                console.log(saleid);
                if (storageTemp.hasOwnProperty("EmployeeID") && storageTemp.ID == saleid){
                    
                    try {
                        for(var key2 in localStorage) {
                            var storageTemp2 = JSON.parse(localStorage[key2]);
                            if (storageTemp2.hasOwnProperty('Mobile') && storageTemp2.ID == storageTemp.CustomerID) {
                                customername = storageTemp2.FirstName + " " + storageTemp2.MiddleName + ". "  + storageTemp2.LastName;
                                custadd = storageTemp2.StreetNumber + " " + storageTemp2.StreetName + ", " + storageTemp2.City + ", " + storageTemp2.State + ", " + storageTemp2.ZipCode;
                                custphone = storageTemp2.Mobile;
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
                                            Qty : storageTemp4.Qty,
                                            Price : storageTemp5.UnitPrice
                                        }
                                    } 
                                   
                                }
                                
                                } catch {}
                                
                                
                                
                            }
                        }
                    }
                    catch {}
        
                    var productTxt = "";

                    saleCustTable += "Invoice-" + storageTemp.ID + "-" + storageTemp.Date + "</br></br><h1>" + storageTemp.Type + " Invoice</h1></br>Sale Employee: " + employeename +  "</br></br><h3>Customer </h3>Name: " + customername + "</br>Address: " + custadd + "</br>Phone: " + custphone + "</br></br><h3>Items</h3>";

                    let subtotal = 0;
                    let tax = 0;
                    let total = 0;

                    try {
                        for (let i = 1; i <= count; i++) {
                        productTxt += products[i].Name + " ($" + products[i].Price + ") x " + products[i].Qty + " = $" + products[i].Price * products[i].Qty + "</br>";
                        subtotal += products[i].Price * products[i].Qty;
                    }
                    }catch{}
                    
                    saleCustTable += productTxt;
                    
                    tax = subtotal * 0.13;
                    total = subtotal + tax;

                    saleCustTable += "</br>Subtotal: $" + subtotal + "</br>Tax: $" + Math.trunc(tax) + "</br>Total: $" + Math.trunc(total);
        
                }
                saleCustTable += "</p>"
            }
            catch {}
        }
                                        
        document.getElementById("found-invoice").innerHTML = saleCustTable;
}


