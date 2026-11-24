e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;

let message = document.getElementById("message");

if (name == "" || email == "" || password == "" || confirm == "") {
    message.innerHTML = "Please fill all fields";
}
else if (!email.includes("@")) {
    message.innerHTML = "Invalid Email";
}
else if (password != confirm) {
    message.innerHTML = "Passwords do not match";
}
else {
    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    message.innerHTML = "Signup Successful";
}