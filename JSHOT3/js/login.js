document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    var successMessage = document.getElementById("successMessage");

    errorMessage.textContent = "";
    successMessage.textContent = "";

    if (email === "" || password === "") {
        errorMessage.textContent = "You seem to have forgotten your username and password.";
    } else if (email === "admin@example.com" && password === "password") {
        successMessage.textContent = "Welcome back Admin!";
    } else {
        errorMessage.textContent = "That email and password doesn't seem to be right. Try again.";
    }
});