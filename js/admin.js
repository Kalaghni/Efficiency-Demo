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
    const username = formlog.inputEmail.value;
    const password = formlog.inputPassword.value;

    if (username === "dan@gmail.com" && password === "dan12345") {
        location.assign("index.html");
    } else {
        alert("Account can't be found. Please try again.");
    }
})