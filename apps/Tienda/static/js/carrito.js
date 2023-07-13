document.addEventListener('DOMContentLoaded', () => {
console.log("carrito.js cargado");
    // Variables (aquí se guardan los datos)
    const baseDeDatos = [
        {
            id: 1,
        nombre: "Proplan Adulto Razas Medianas - alimento para perro",
        precio: 58656,
        imagen:
        "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwa593e644/images/223e9-adulto-raza-mediana.jpg",
              },
        {
            id: 2,
        nombre: "Comida perro cachorro",
        precio: 15000,
        imagen:
        "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw735e2adc/images/7ac0a-rs6046_bb_puppy_gravy_12kg_li.jpg",
              },
        {
            id: 3,
        nombre: "Comida gato adulto",
        precio: 13000,
        imagen:
        "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw8a8b6892/images/Cat%20Adult%20Sterilized%20-%20sabor%20pollo%20y%20arroz.jpg",
              },
        {
            id: 4,
        nombre: "Bravery Chicken Adult alimento para perro",
        precio: 38610,
        imagen: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwc048a17c/images/3f3a3-chicken-adult.jpg",
              },
        {
            id: 5,
        nombre: "Fit Formula Gato Adulto alimento para gato",
        precio: 29990,
        imagen: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw5fa1505f/images/4969e-gato-10-web.jpg",
              },
        {
            id: 6,
        nombre: "Taste Of The Wild Canyon River Gato alimento para gato",
        precio: 38220,
        imagen: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwbfd8161f/images/f18aa-cayon-river1.jpg",
              },
        {
            id: 7,
        nombre: "Pepolli set arnés 2-en-1 correa y poops dublin",
        precio: 26990,
        imagen: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwb31b3708/images/Pepolli%20set%20arnes%202-en-1%20correa%20y%20poops%20dublin%204.jpg",
              },
        {
            id: 8,
        nombre: "Pepolli correa premium - Talla M",
        precio: 19900,
        imagen: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw101c7986/images/Pepolli%20correa%20premium.jpg",
              },
        {
            id: 9,
        nombre: "Zeedog Correa Midnight",
        precio: 8000,
        imagen: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw06b90c62/images/f0573-midnight-correa.png",
              },
        ]

    let carrito = [];
    const divisa = 'CLP';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    *todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // 
                return itemId === item ? total += 1 : total;
            }, 0);
            //  item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Se calcula el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * para borrar un elemento del carrito (Se borran todos los productos con el mismo nombre)
    */
    function borrarItemCarrito(evento) {
               // Obtenemos el producto ID que hay en el boton pulsado
               const id = evento.target.dataset.item;
               // Borramos todos los productos
               carrito = carrito.filter((carritoId) => {
                   return carritoId !== id;
               });
               //
               renderizarCarrito();
               // Actualizamos el LocalStorage
               guardarCarritoEnLocalStorage();
       
           }

    //LA FUNCION DE ARRIBA ES LO MISMO QUE ESTA PERO ESTA ES PARA BORRAR 1, EL PROBLEMA ESQUE AUN NO LA PUEDO HACER FUNCIONAR
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Buscamos el elemento en el carrito
        const elementoABorrar = carrito.find((carritoId) => carritoId === id);
        // Si el elemento existe en el carrito, lo eliminamos
        if (elementoABorrar) {
            carrito = carrito.filter((carritoId) => carritoId !== id);
            // volvemos a renderizar
            renderizarCarrito();
            // Actualizamos el LocalStorage
            guardarCarritoEnLocalStorage();
            
        }
        DOMbotonBorrar.addEventListener('click', borrarItemCarrito);
    }
    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // REVISION DE LOCAL STORAGE
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});

//ESTE ES PARA PODER AGREGAR PRODUCTOS NUEVOS, PERO AUN NO LO PUEDO HACER FUNCIONAR
const contenedorProductos = document.querySelector('#productos');

const nuevoElemento = document.createElement('div');
nuevoElemento.innerHTML = `
    <h2>${nuevoProducto.nombre}</h2>
    <p>${nuevoProducto.descripcion}</p>
    <p>Precio: ${nuevoProducto.precio}</p>
    <img src="${nuevoProducto.imagen}" alt="${nuevoProducto.nombre}">
`;

contenedorProductos.appendChild(nuevoElemento);