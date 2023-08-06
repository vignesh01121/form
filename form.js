function login() {
    var username = document.getElementById("login_user").value;
    var password = document.getElementById("login_pass").value;

    // Retrieve the stored user data from Local Storage
    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered login credentials match any stored user data
    var matchedUser = storedUsers.find(user => user.username === username && user.password === password);

    if (matchedUser) {
        alert("Login successful!");
        // Redirect the user to a different page (e.g., dashboard.html)
        // You can use window.location.href or any other method to redirect.
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
