/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

if (localStorage['login_status'] != undefined) {
    username = JSON.parse(localStorage['login_status']).Username;
    for (var key in localStorage) {
        if (JSON.parse(localStorage[key]).hasOwnProperty('Email') && JSON.parse(localStorage[key]).Group == "Admin" && JSON.parse(localStorage[key]).Username == username) {
            document.getElementById('admin-only-users').innerHTML = `<a class="nav-link" href="Table-User.html"><div class="sb-nav-link-icon"></div>Users</a>`;
        }
    }
}
else {
    location.assign("login.html")
}

function Logout() {
    if (localStorage['login_status'] != undefined) {
        delete localStorage['login_status'];
    } 
}

