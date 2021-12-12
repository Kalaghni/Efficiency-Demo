/*var objMember = [
    {
        username: "Emma",
        email: "emma@gmail.com",
        password: "emma12345"
    },
    {
        username: "William",
        email: "william@gmail.com",
        password: "will12345"
    },
    {
        username: "Dannella",
        email: "dan@gmail.com",
        password: "dan12345"
    }
]*/

const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const email = formlog.inputEmail.value;
    const password = formlog.inputPassword.value;

    for (var key in localStorage) {
        storageTemp = JSON.parse(localStorage[key]);
        if (storageTemp.Email == email && storageTemp.Password == password) {
            setUser(email);
            location.assign("index.html");
        }
    }
        alert("Account can't be found. Please try again.");
})

function setUser(email) {
    for (var key in localStorage) {
        storageTemp = JSON.parse(localStorage[key]);
        if (storageTemp.Email == email) {
            localStorage.setItem('login_status', JSON.stringify({
                Firstname: storageTemp.Firstname,
                Lastname: storageTemp.Lastname,
                Username: storageTemp.Username,
                Group: storageTemp.Group
            }));
            break;
        }
    }
}

if (localStorage['emma'] == undefined) {
    localStorage.setItem('emma', JSON.stringify({
        ID: localStorage.length,
        Firstname: "Emma",
        Lastname: "Motors",
        Email: "emma@gmail.com",
        Username : "Emma",
        Password : "password",
        Group : "Admin"
    }));
}

