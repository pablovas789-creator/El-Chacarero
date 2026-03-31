const productos = [
    {
        id: 1,
        nombre: "Ají Artesanal",
        precio: 3,
        categoria: "aji",
        img: "https://via.placeholder.com/150",
        descripcion: "Nivel de picor: 🔥🔥🔥\nEn vinagre con especias naturales."
    },
    {
        id: 2,
        nombre: "Café Orgánico",
        precio: 8,
        categoria: "cafe",
        img: "https://via.placeholder.com/150",
        descripcion: "Origen: Yunguilla\nTueste medio\nNotas: chocolate y frutos."
    },
    {
        id: 3,
        nombre: "Queso Fresco",
        precio: 5,
        categoria: "queso",
        img: "https://via.placeholder.com/150",
        descripcion: "Queso fresco\nConservar refrigerado\nDuración: 7 días."
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos(lista) {
    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = "";

    lista.forEach(p => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="${p.img}">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="agregarCarrito(${p.id})">Agregar</button>

                <div class="descripcion">
                    <p>${p.descripcion}</p>
                </div>
            </div>
        `;
    });
}

function filtrar() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const categoria = document.getElementById("filtro").value;

    const filtrados = productos.filter(p =>
        (categoria === "todos" || p.categoria === categoria) &&
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
}

function agregarCarrito(id) {
    const prod = productos.find(p => p.id === id);
    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...prod, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const contenedor = document.getElementById("carrito-items");
    const totalElemento = document.getElementById("total");
    const contadorMenu = document.getElementById("num-carrito"); // El del menú

    contenedor.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach(p => {
        if (!p.cantidad) p.cantidad = 1;
        const subtotal = p.precio * p.cantidad;
        total += subtotal;
        cantidadTotal += p.cantidad;

        contenedor.innerHTML += `
            <p>✅ ${p.nombre} x${p.cantidad} - $${subtotal}</p>
        `;
    });

    totalElemento.innerText = total;
    if(contadorMenu) {
        contadorMenu.innerText = cantidadTotal; // Aquí se actualiza el (0)
    }
}

function comprar() {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const email = document.getElementById("email").value; // Recuerda agregar este input en el HTML

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    if (!nombre || !direccion) {
        alert("Por favor completa tu nombre y dirección");
        return;
    }

    // Preparamos el resumen para el cliente
    const total = document.getElementById("total").innerText;
    let mensaje = `Hola ${nombre}, gracias por tu pedido en El Chacarero.\n\n`;
    mensaje += `Detalle: ${carrito.map(p => p.nombre + " x" + p.cantidad).join(", ")}\n`;
    mensaje += `Total a pagar: $${total}\n\n`;
    mensaje += `Por favor, realiza la transferencia al Banco Pichincha (Cta: 1234567890) y envía el comprobante por este medio.`;

    // Opción A: Abrir WhatsApp con el pedido (Muy efectivo en Ecuador)
    const urlWhatsapp = `https://wa.me/593XXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp, '_blank');

    // Limpiar todo
    alert("Pedido registrado. Serás redirigido para enviar tu comprobante.");
    carrito = [];
    localStorage.removeItem("carrito");
    actualizarCarrito();
}

function vaciarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito ya está vacío");
        return;
    }

    if (confirm("¿Seguro que quieres vaciar el carrito?")) {
        carrito = [];
        localStorage.removeItem("carrito");
        actualizarCarrito();
    }
}

mostrarProductos(productos);
actualizarCarrito();