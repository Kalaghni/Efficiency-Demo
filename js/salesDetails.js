

let saleid = 0;


let total = 0;
var saleCustTable = "";
count = 0;
for (var key in localStorage){
    //console.log(key);
    try{
            saleCustTable += "<p>"
            var storageTemp = JSON.parse(localStorage[key]);
            let products = [{}];
            console.log(saleid);
            if (storageTemp.hasOwnProperty("EmployeeID")){
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

                
                

                try {
                    for (let i = 1; i <= count; i++) {
                    productTxt += products[i].Name + " ($" + products[i].Price + ") x " + products[i].Qty + " = $" + products[i].Price * products[i].Qty + "</br>";
                    total += products[i].Price * products[i].Qty;
                }
                }catch{}
                
                saleCustTable += productTxt;

            } 
            
        }
        catch {}
        
    }
saleCustTable += "</br>Total: $" + Math.trunc(total * 1.13) + "</br>Party Planning Budget: $" + Math.trunc(total * 1.13 * 0.02);
            saleCustTable += "</p>"                                    
document.getElementById("found-invoice").innerHTML = saleCustTable;


