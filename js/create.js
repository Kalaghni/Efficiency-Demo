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

function newProduct(){
    let desc = document.getElementById("desc").value;
    let name = document.getElementById("name").value;
    let stock = document.getElementById("stock").value;
    let color = document.getElementById("color").value;
    let itemnumber = document.getElementById("itemnumber").value;
    let unitprice = document.getElementById("unitprice").value;
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

function newSaleCust(){
    let phone = document.getElementById("phone").value;
    let customername = document.getElementById("customername").value;
    letDdate = document.getElementById("date").value;
    let type = document.getElementById("type").value;
    let empName = document.getElementById("empName").value;
    let subTotal = document.getElementById("subTotal").value;
    let tax = document.getElementById("tax").value;
    let total = document.getElementById("total").value;
    //From here data will be stored into a database
    newSaleEquip()

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        let id = 0;
        if (localStorage.length == 0)
        {
            console.log("Im braindead")
            localStorage.setItem('salesCust', JSON.stringify({
                Phone: phone,
                customername: customername,
                Date: date,
                Type: type,
                EmpName: empName,
                SubTotal: subTotal,
                Tax : tax,
                Total: total
            }));
        } else {
            localStorage.setItem('salesCust' + localStorage.length, JSON.stringify({
                Phone: phone,
                customername: customername,
                Date: date,
                Type: type,
                EmpName: empName,
                SubTotal: subTotal,
                Tax : tax,
                Total: total
            }));
        }
    } else {
       document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function newSaleEquip(){
    let name = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    //From here data will be stored into a database

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        let id = 0;
        if (localStorage.length == 0){
            localStorage.setItem('salesEquip', JSON.stringify({
                Name: name,
                Quantity: quantity,
                Price : price
            }));
        } else {
            localStorage.setItem('salesEquip' + localStorage.length, JSON.stringify({
                Name: name,
                Quantity: quantity,
                Price : price
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
        let id = 0;
        if (localStorage.length == 0){
            localStorage.setItem('user', JSON.stringify({
                Firstname: firstname,
                Lastname: lastname,
                Email: email,
                Username : username,
                Password : password,
                Group : group
            }));
        } else {
            localStorage.setItem('user' + localStorage.length, JSON.stringify({
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