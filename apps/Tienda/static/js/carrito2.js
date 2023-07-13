console.log('carrito2.js cargado');
document.addEventListener('DOMContentLoaded', function () {
    let addToCartButtons = document.getElementsByClassName('boton-item');
    let carrito = document.getElementById('carrito');
    let total = document.getElementById('total');
    let stockModal = document.getElementById('stock-alert');

    let carritoItems = [];

    function actualizarCarrito() {
        carrito.innerHTML = '';
        for (let i = 0; i < carritoItems.length; i++) {
            let item = carritoItems[i];
            let carritoItem = document.createElement('li');
            carritoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            carritoItem.innerHTML = `
        <div class="carrito-item">
          <img src="${item.image_url}" id="imagencart" class="card-img-top" alt="..." style="width: 50px; height: 50px;">
          <span name='xd123'>${item.nombre}</span>
        </div>
        <span class="badge bg-secondary">${item.cantidad}</span>`;


            let btnSumar = document.createElement('button');
            btnSumar.innerHTML = '+';
            btnSumar.className = 'btn btn-success btn-sm ';
            btnSumar.addEventListener('click', () => {
                sumarProducto(item);
            });
            carritoItem.appendChild(btnSumar);


            let btnRestar = document.createElement('button');
            btnRestar.innerHTML = '-';
            btnRestar.className = 'btn btn-danger btn-sm ';
            btnRestar.addEventListener('click', () => {
                restarProducto(item);
            });
            carritoItem.appendChild(btnRestar);

            carrito.appendChild(carritoItem);
        }

        total.textContent = calcularTotal();
    }

    function calcularTotal() {
        let total = 0;
        for (let i = 0; i < carritoItems.length; i++) {
            total += carritoItems[i].precio * carritoItems[i].cantidad;
        }
        return total;
    }

    function encontrarItemEnCarrito(nombre) {
        for (let i = 0; i < carritoItems.length; i++) {
            if (carritoItems[i].nombre === nombre) {
                return i;
            }
        }
        return -1;
    }

    function sumarProducto(item) {
        if (item.cantidad < item.stock) {
            item.cantidad++;
            actualizarCarrito();
        } else {

            stockModal.style.display = 'block';
        }
    }

    function restarProducto(item) {
        if (item.cantidad > 1) {
            item.cantidad--;
        } else {

            let index = carritoItems.indexOf(item);
            if (index !== -1) {
                carritoItems.splice(index, 1);
            }
        }
        actualizarCarrito();
    }

    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', function (event) {
            event.preventDefault();

            let itemTitle = this.parentNode.getElementsByClassName('titulo-item')[0].textContent;
            let itemImage = this.parentNode.querySelector('img').getAttribute('src');
            let itemPrecio = parseFloat(this.parentNode.getElementsByClassName('precio-item')[0].textContent);
            let itemStock = parseInt(this.parentNode.getElementsByClassName('stock-item')[0].textContent);

            let addedMessage = document.createElement('div');
            addedMessage.className = 'added-message';
            addedMessage.textContent = 'Añadido al Carrito: ' + itemTitle;

            let index = encontrarItemEnCarrito(itemTitle);
            if (index !== -1) {
                if (carritoItems[index].cantidad < itemStock) {
                    carritoItems[index].cantidad++;
                } else {

                    stockModal.style.display = 'block';
                    return;
                }
            } else {
                let newItem = {
                    nombre: itemTitle,
                    image_url: itemImage,
                    precio: itemPrecio,
                    cantidad: 1,
                    stock: itemStock,
                };
                carritoItems.push(newItem);
            }
            actualizarCarrito();
        });
    }

    document.getElementById('boton-vaciar').addEventListener('click', function () {
        carritoItems = [];
        actualizarCarrito();
    });

    document.getElementById('boton-finalizar').addEventListener('click', function () {
        var productos = [];
        var item = document.getElementsByClassName('carrito-item');
        for(i=0;i<item.length;i++){
            const nomprod = document.getElementsByName('xd123')[i].innerHTML;
            const cantidad = document.getElementsByClassName('badge bg-secondary')[i].innerHTML;
            var producto ={
                nomprod: nomprod,
                cantidad: cantidad
            }
            productos.push(producto);
            var datos = {
                productos: productos
            }
            fetch('/actualizar_stock/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            }).then(
                function (response) {
                    if (response.ok) {
                        console.log('Stock actualizado correctamente.');
                    } else {
                        console.error('Error al actualizar stock: ', response.status);
                    }
                }
            )
        }
        
        
        let totalVenta = calcularTotal();
        document.getElementById('modal-total').textContent = totalVenta.toFixed(2);
        carritoItems = [];
        actualizarCarrito();
    });


    $('#modal-finalizar').on('hidden.bs.modal', function () {
    });
        carritoItems = [];
        actualizarCarrito();
        
    const botonFinalizarCompra = document.getElementById('boton-finalizar');

});

