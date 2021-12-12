var empddl = `<option value=0>None</option>`;
    for (var key in localStorage) {
        try{
            var storageTemp = JSON.parse(localStorage[key]);
            if (storageTemp.hasOwnProperty('Email')) {
                empddl += `<option value="` + storageTemp.ID +`">` + storageTemp.Firstname + " " + storageTemp.Lastname + `</option>`;
            }
        }
        catch {

        }
    }
document.getElementById('empddl').innerHTML = empddl;