var div = document.getElementById('user');
if (localStorage['login_status'] != undefined) {
    div.innerHTML = JSON.parse(localStorage['login_status']).Firstname;
}
else {
    div.innerHTML = "Not logged in";
}

