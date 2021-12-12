function newCustomer(){
    let firstName = document.getElementById("firstname").value;
    let middleName = document.getElementById("middlename").value;
    let lastName = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let streetNumber = document.getElementById("streetnumber").value;
    let streetName = document.getElementById("streetname").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zip").value;

    //From here data will be stored into a database
    if (typeof(Storage) !== "undefined") { // Check browser support
        // Store data
        if (localStorage.length == 0){
            localStorage.setItem('customer', JSON.stringify({
                ID: localStorage.length + 1,
                FirstName: firstName,
                MiddleName: middleName,
                LastName: lastName,
                Mobile: phone,
                StreetNumber: streetNumber,
                StreetName: streetName,
                City: city,
                StateLocation: state,
                ZipCode: zipCode,
            }));
        } else {
            localStorage.setItem('customer' + localStorage.length, JSON.stringify({
                ID: localStorage.length,
                FirstName: firstName,
                MiddleName: middleName,
                LastName: lastName,
                Mobile: phone,
                StreetNumber: streetNumber,
                StreetName: streetName,
                City: city,
                State: state,
                ZipCode: zipCode,
            }));
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    location.assign("Table-Customer.html");
}

function newProduct(itemindex){
    let desc = document.getElementById("desc" + itemindex).value;
    let name = document.getElementById("name" + itemindex).value;
    let stock = document.getElementById("stock" + itemindex).value;
    let color = document.getElementById("color" + itemindex).value;
    let itemnumber = document.getElementById("itemnumber" + itemindex).value;
    let unitprice = document.getElementById("unitprice" + itemindex).value;
    //From here data will be stored into a database

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        if (localStorage.length == 0){
            localStorage.setItem('product', JSON.stringify({
                ID: localStorage.length,
                Desc: desc,
                Name: name,
                Stock: stock,
                Color: color,
                ItemNumber: itemnumber,
                UnitPrice: unitprice
            }));
        } else {
            localStorage.setItem('product' + localStorage.length, JSON.stringify({
                ID: localStorage.length + 1,
                Desc: desc,
                Name: name,
                Stock: stock,
                Color: color,
                ItemNumber: itemnumber,
                UnitPrice: unitprice
            }));
        }
         
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function newEquipment(){
    let name = document.getElementById("name").value;
    let brand = document.getElementById("brand").value;
    let type = document.getElementById("type").value;
    let manufacture = document.getElementById("manufacture").value;
    let serial_number = document.getElementById("serialnumber").value;
    let m_number = document.getElementById("manufacture_number").value;
    let owner = document.getElementById("ownerddl").value;
    let description = document.getElementById("description").value;
    //From here data will be stored into a database

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        let id = 0;
        if (localStorage.length == 0){
            localStorage.setItem('equipment', JSON.stringify({
                Name: name,
                Brand: brand,
                Type: type,
                Manufacture: manufacture,
                SerialNumber: serial_number,
                ProductNumber: m_number,
                CustomerID: owner,
                Description: description
            }));
        } else {
            localStorage.setItem('equipment' + localStorage.length, JSON.stringify({
                Name: name,
                Brand: brand,
                Type: type,
                Manufacture: manufacture,
                SerialNumber: serial_number,
                ProductNumber: m_number,
                CustomerID: owner,
                Description: description
            }));
        }
         
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
   location.assign("Table-Item.html");
}

let count = 0;
var tempItems;


function newSaleItem() {
    count++; 


    if (count != 1) {
        tempItems = tempItems.replace(`<input type="button" onclick="newSaleItem()" value="+">`, '');
    }
    
    
    if (count > 1) {
        tempItems += "------------------------------"; 
    }

    tempItems += `<label for='saleitems` + count + `' >Product</label><select id='saleitems` + count + `' name='saleitems` + count + `'>`;
    for (var key in localStorage) {
        try {
            var storageTemp = JSON.parse(localStorage[key]);
            if (storageTemp.hasOwnProperty('Desc')) {
                tempItems += `<option value ='` + storageTemp.ID + `'>` + storageTemp.Name + `</option>`;
            }
        }
        catch {}
    }

    tempItems += `</select><label for='qty` + count + `' >Quantity</label><input id="qty` + count + `" name="qty` + count + `" type="number">
    
    </br></br><input type="button" onclick="newSaleItem()" value="+">`;
   
    tempItems = tempItems.replace("undefined", "");

    document.getElementById('saleitems').innerHTML = tempItems;
}

function newSale(){
    let customer = document.getElementById("ownerddl").value;   
    let employee = document.getElementById("empddl").value;
    let date = document.getElementById("date").value;
    let type = document.getElementById("type").value;

    for (let i = 1; i <= count; i++) {
        newSaleProduct(localStorage.length, document.getElementById('saleitems' + count).value);
    }
    

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        let id = 0;
        if (localStorage.length == 0)
        {
            localStorage.setItem('sale', JSON.stringify({
                ID: localStorage.length,
                CustomerID: customer,
                EmployeeID: employee,
                Date: date,
                Type: type
            }));
        } else {
            localStorage.setItem('sale' + localStorage.length, JSON.stringify({
                ID: localStorage.length,
                CustomerID: customer,
                EmployeeID: employee,
                Date: date,
                Type: type
            }));
        }
    } else {
       document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function newSaleProduct(saleid, productid){
    //From here data will be stored into a database

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        if (localStorage.length == 0){
            localStorage.setItem('saleproduct', JSON.stringify({
                ID: localStorage.length,
                SaleID: saleid,
                ProductID: productid
            }));
        } else {
            localStorage.setItem('saleproduct' + localStorage.length, JSON.stringify({
                ID: localStorage.length,
                SaleID: saleid,
                ProductID: productid
            }));
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function newUser(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let group = "";
    try {
        group = document.getElementById("group").value;
    }
    catch {
        group = "Default"
    }
    
    //From here data will be stored into a database

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        if (localStorage.length == 0){
            localStorage.setItem('user', JSON.stringify({
                ID: localStorage.length,
                Firstname: firstname,
                Lastname: lastname,
                Email: email,
                Username : username,
                Password : password,
                Group : group
            }));
        } else {
            localStorage.setItem('user' + localStorage.length, JSON.stringify({
                ID: localStorage.length,
                Firstname: firstname,
                Lastname: lastname,
                Email: email,
                Username : username,
                Password : password,
                Group : group
            }));
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

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

let orders = allStorage().map(JSON.parse)

function findInvoice(){
    phone = document.getElementById("phone").value;
    let list = document.getElementById("list");
    list = "";
    
    if (typeof(Storage) !== "undefined") {

        
        
        orders.forEach(o => {
            if(phone == o.Phone){
                getSetText(o)
            }
            else{
                //list.innerHTML += `<li> No invoices found </li>`;
                //getElementById("phone").value = "No Invoices found under that Number!";
            }
        });
    
    
        
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function getSetText(getSet)
{
    
    let list = "";

    if(getSet == "get"){
       list += list.innerHTML += `<li>${phone} </li>`
       list += list.innerHTML += `<li>${customername} </li>`
       list += list.innerHTML += `<li>${date} </li>`
       list += list.innerHTML += `<li>${type} </li>`
       list += list.innerHTML += `<li>${empName} </li>`
       list += list.innerHTML += `<li>${name} </li>`
       list += list.innerHTML += `<li>${quantity} </li>`
       list += list.innerHTML += `<li>${price} </li>`
       list += list.innerHTML += `<li>${subTotal} </li>`
       list += list.innerHTML += `<li>${tax} </li>`
       list += list.innerHTML += `<li>${total} </li>`
        document.getElementById("list").value == list;
    }
    else{
        
        phone = getSet.Phone;
        customername = getSet.customername;
        date = getSet.Date;
        type = getSet.Type;
        empName = getSet.EmpName;
        name = getSet.Name;
        quantity = getSet.Quantity;
        price = getSet.Price;
        subTotal = getSet.SubTotal;
        tax = getSet.Tax;
        total = getSet.Total;

    }
}