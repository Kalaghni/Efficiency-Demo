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

try{
    document.getElementById('nav-main').innerHTML = `   
    <a class="nav-link" href="index.html">
        <div class="sb-nav-link-icon"></div>
        Home
    </a>
    <a class="nav-link" href="Table-Customer.html">
        <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
        Customers
    </a>
    <a class="nav-link" href="Table-Item.html">
        <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
        Equipments
    </a>
    <a class="nav-link" href="Table-Product.html">
        <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
        Products
    </a>
    <a class="nav-link" href="Table-Sale.html">
        <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
        Sales
    </a>
    <a class="nav-link" href="Invoice.html">
        <div class="sb-nav-link-icon"></div>
        Invoice Lookup
    </a>
    
    <div id="admin-only-users">
    </div>
    
    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                Authentication
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
            </a>
            <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="login.html">Login</a>
                    <a class="nav-link" href="register.html">Register</a>
                    <a class="nav-link" href="password.html">Forgot Password</a>
                </nav>
            </div>
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                Error
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
            </a>
            <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="401.html">401 Page</a>
                    <a class="nav-link" href="404.html">404 Page</a>
                    <a class="nav-link" href="500.html">500 Page</a>
                </nav>
            </div>
        </nav>
    </div>`
}
catch {}

if (localStorage['login_status'] != undefined) {
    username = JSON.parse(localStorage['login_status']).Username;
    for (var key in localStorage) {
        try {
            if (JSON.parse(localStorage[key]).hasOwnProperty('Email') && JSON.parse(localStorage[key]).Group == "Admin" && JSON.parse(localStorage[key]).Username == username) {
                document.getElementById('admin-only-users').innerHTML = `<a class="nav-link" href="Table-User.html"><div class="sb-nav-link-icon"></div>Users</a>`;
            }
        }
        catch {}
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

function findInvoice() {
    saleid = document.getElementById("saleid").value;
    console.log(saleid);
}