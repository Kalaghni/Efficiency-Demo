function newClient(){
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
    console.log(firstName);
    console.log(zipCode);
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        let id = 0;
        if (localStorage.length == 0){
            localStorage.setItem('customer', JSON.stringify({
                FirstName: firstName,
                MiddleName: middleName,
                LastName: lastName,
                Mobile: phone,
                Street: streetNumber,
                StreetName: streetName,
                CityLocation: city,
                StateLocation: state,
                ZipCode: zipCode,
            }));
        } else {
            localStorage.setItem('customer' + localStorage.length, JSON.stringify({
                FirstName: firstName,
                MiddleName: middleName,
                LastName: lastName,
                Mobile: phone,
                Street: streetNumber,
                StreetName: streetName,
                CityLocation: city,
                StateLocation: state,
                ZipCode: zipCode,
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
                Description: description,
            }));
        } else {
            localStorage.setItem('equipment' + localStorage.length, JSON.stringify({
                Name: name,
                Brand: brand,
                Type: type,
                Manufacture: manufacture,
                SerialNumber: serial_number,
                ProductNumber: m_number,
                Description: description,
            }));
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
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

function findInvoice(){
    phone = document.getElementById("phone").value;

    if (typeof(Storage) !== "undefined") {

        orders = localStorage.getItem('salesCust', Phone)
        
        foreach(o in orders)
        {
            if(phone == o.Phone){
                getElementById("phone").value = o.Phone;
                getElementById("customername").value = o.customername;
                getElementById("date").value = o.Date;
                getElementById("type").value = o.Type;
                getElementById("empName").value = o.EmpName;
                getElementById("name").value = o.Name;
                getElementById("quantity").value = o.Quantity;
                getElementById("price").value = o.Price;
                getElementById("subTotal").value = o.SubTotal;
                getElementById("tax").value = o.Tax;
                getElementById("total").value = o.Total;
            }
        }
    
        
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}