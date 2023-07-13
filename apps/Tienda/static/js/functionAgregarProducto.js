const formulario = document.getElementById("formularioAgregarProducto");

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    if (document.getElementById("txtSku").value.length == 0) {
        alert("INGRESE 1 PRODUCTO")
        return;
    }else{
        this.submit();
    }

})