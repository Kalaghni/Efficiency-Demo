var ownerddl = `<option value=0>None</option>`;
    for (var key in localStorage) {
        try{
            var storageTemp = JSON.parse(localStorage[key]);
            if (storageTemp.hasOwnProperty('Mobile')) {
                ownerddl += `<option value="` + storageTemp.ID +`">` + storageTemp.FirstName + " " + storageTemp.LastName + `</option>`;
            }
        }
        catch {

        }
    }
document.getElementById('ownerddl').innerHTML = ownerddl;