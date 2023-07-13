function login() {
    var username = document.getElementById("form3Example1cg").value;
    var password = document.getElementById("form3Example4cg").value;
    if (username == "admin@correo.com" && password == "admin123") {
        alert("Bienvenido!");
        window.location = "admin.html";
    }else if(username == "user@correo.com" && password == "user1234"){
        alert("Bienvenido!");
        window.location = "indexSignup.html";
    } 
    else {
        alert("Usuario o contraseña incorrectos");
    }
}
