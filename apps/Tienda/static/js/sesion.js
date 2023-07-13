$(function(){
    $("#loginForm").validate({
        rules: {
            form3Example1cg: {
                required: true,
                email: true
            },
            form3Example4cg: {
                required: true
            }
        },
        messages: {
            form3Example1cg: {
                required: "El correo es obligatorio",
                email: "El correo debe tener un formato válido"
            },
            form3Example4cg: {
                required: "La contraseña es obligatoria",
            }
        }
    })
})



function validarLogin() {
    if (document.getElementById("form3Example1cg").value.length === 0) {
        document.getElementById("form3Example1cg").classList.add("is-invalid");
        showAlert("Debe ingresar un correo válido", "danger");
        return;
    } else {
        document.getElementById("form3Example1cg").classList.remove("is-invalid");
        document.getElementById("form3Example1cg").classList.add("is-valid");
    }
    if (document.getElementById("form3Example4cg").value.length === 0) {
        document.getElementById("form3Example4cg").classList.add("is-invalid");
        showAlert("Debe ingresar la contraseña", "danger");
        return;
    } else {
        document.getElementById("form3Example4cg").classList.remove("is-invalid");
        document.getElementById("form3Example4cg").classList.add("is-valid");
    }

    document.getElementById("loginForm").submit();
}

function showAlert(message, type) {
    var alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = '<div class="alert alert-' + type + '">' + message + '</div>';
}