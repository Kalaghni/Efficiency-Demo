var div = document.getElementById('user');
if (localStorage['login_status'] != undefined) {
    div.innerHTML = JSON.parse(localStorage['login_status']).Firstname;
}
else {
    div.innerHTML = "Not logged in";
}

// let count = 0;
// let products = {};
// let total = 0;

// var div2 = document.getElementById('partyplanning');
// for (var key in localStorage) {
//     try {
//         let storageTemp = JSON.parse(localStorage[key]);
//         if (storageTemp.hasOwnProperty('EmployeeID')) {
//             try {
//                 for(var key4 in localStorage) {
//                     var storageTemp4 = JSON.parse(localStorage[key4]);
//                     if (storageTemp4.hasOwnProperty('ProductID') && storageTemp4.SaleID == storageTemp.ID) {
//                         try {
//                             for (var key5 in localStorage) {
                           
//                             var storageTemp5  = JSON.parse(localStorage[key5]);
//                             if (storageTemp5.hasOwnProperty('Desc') && storageTemp4.ProductID == storageTemp5.ID) {
//                                 count++;
//                                 products[count] = {
//                                     Name : storageTemp5.Name,
//                                     Qty : storageTemp4.Qty,
//                                     Price : storageTemp5.UnitPrice
//                                 }
//                             } 
                           
//                         }
                        
//                         } catch {}
                        
                        
                        
//                     }
//                 }
//             }
//             catch {}
//         }
//     }
//     catch {}  

//     let subtotal = 0;

//     try {
//         for (let i = 1; i <= count; i++) {
//         subtotal += products[i].Price * products[i].Qty;
//     }
//     }catch{} 
    
//     total = subtotal * 1.13;

    
// } 
// div2.innerHTML = "</br>Total Sales: $" + Math.trunc(total) + "</br>Party Planning: $" + Math.trunc(total * 0.02); 