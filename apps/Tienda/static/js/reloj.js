function cargarReloj() {
    var fechahora = new Date();
    var hora = fechahora.getHours();
    var minuto = fechahora.getMinutes();
    var segundo = fechahora.getSeconds();
    var meridiano = "a.m";

    if (hora == 0) {
        hora = 12;
    }

    if (hora > 12) {
        hora = hora - 12;
        meridiano = "p.m";
    }

    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;

    var tiempo = hora + ":" + minuto + ":" + segundo + " " + meridiano;
    document.getElementById("reloj").innerText = tiempo;
    document.getElementById("reloj").textContent = tiempo;

    setTimeout(cargarReloj, 500);
}

cargarReloj();
