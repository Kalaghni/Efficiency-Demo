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
    console.log(localStorage);
}

function newSale(){
    let customernumber = document.getElementById("number").value;
    let employeename = document.getElementById("name").value;
    //From here data will be stored into a database

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store data
        let id = 0;
        if (localStorage.length == 0){
            localStorage.setItem('sales', JSON.stringify({
                Customer: customernumber,
                Name: employeename
            }));
        } else {
            localStorage.setItem('sales' + localStorage.length, JSON.stringify({
                Customer: customernumber,
                Name: employeename
            }));
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    console.log(localStorage);
}