console.log("funcionando registro.js");
document.getElementById("varNombre").style.display = "none";
document.getElementById("varCorreo").style.display = "none";
document.getElementById("varPassord").style.display = "none";
document.getElementById("varRPassword").style.display = "none";



function validarRegister() {
    if (document.getElementById("form3Example1cg").value.length == 0) {
        document.getElementById("varNombre").style.display = "inline";
        document.getElementById("form3Example1cg").classList.add("is-invalid");
    } else {
        document.getElementById("varNombre").style.display = "none";
        document.getElementById("form3Example1cg").classList.remove("is-invalid");
        document.getElementById("form3Example1cg").classList.add("is-valid");
    }

    if (document.getElementById("form3Example3cg").value.length == 0) {
        document.getElementById("varCorreo").style.display = "inline";
        document.getElementById("form3Example3cg").classList.add("is-invalid");
    } else {
        document.getElementById("varCorreo").style.display = "none";
        document.getElementById("form3Example3cg").classList.remove("is-invalid");
        document.getElementById("form3Example3cg").classList.add("is-valid");

    }

    if (document.getElementById("form3Example4cg").value.length == 0) {
        document.getElementById("varPassord").style.display = "inline";
        document.getElementById("form3Example4cg").classList.add("is-invalid");
    } else {
        document.getElementById("varPassord").style.display = "none";
        document.getElementById("form3Example4cg").classList.remove("is-invalid");
        document.getElementById("form3Example4cg").classList.add("is-valid");
    }


    if (document.getElementById("form3Example5cdg").value.length == 0) {
        document.getElementById("varRPassword").style.display = "inline";
        document.getElementById("form3Example5cdg").classList.add("is-invalid");
    } else {
        document.getElementById("varRPassword").style.display = "none";
        document.getElementById("form3Example5cdg").classList.remove("is-invalid");
        document.getElementById("form3Example5cdg").classList.add("is-valid");
    }
}







