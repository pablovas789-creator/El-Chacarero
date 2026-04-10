const productos = [
    {
        id: 1,
        nombre: "AJÍ MARACUYA/PASION FRUIT CHILLI SAUCE\n165g",
        precio: 3.25,
        categoria: "aji",
        img: "imagenes/productos/Aji_Maracuya.jpeg",
        descripcion: "Nivel de picor: 🔥🔥\nSalsa de ají de maracuya, ganadora en el año 2019 en el concurso internacional HOT SUMMER NIGHT.\n Low level: 🔥🔥 \nPassion fruit chili sauce, champion in 2017 at the international HOT SUMMER NIGHT competition."
    },
    {
        id: 2,
        nombre:"AJÍ ROCOTO ROJO\nROCOTO RED HOT SAUCE\n165g",
        precio: 3.25,
        categoria: "aji",
        img: "imagenes/productos/Aji_Rocoto.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥\nSalsa de ají rocoto rojo.\n Hot level: 🔥🔥🔥🔥 \nRocoto Red Hot Sauce."
    },
    {
        id: 3,
        nombre:"AJÍ ROCOTO AMARILLO\nROCOTO YELLOW HOT SAUCE\n165g",
        precio: 3.25,
        categoria: "aji",
        img: "imagenes/productos/Aji_RocotoAmarillo.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥\nSalsa de ají rocoto amarillo. \n Hot level: 🔥🔥🔥🔥🔥 \nRocoto Yellow Hot Sauce."
    },
    {
        id: 4,
        nombre: "AJÍ HABANERO/HABANERO HOT SAUCE\n165g",
        precio: 3.25,
        categoria: "aji",
        img: "imagenes/productos/Aji_Habanero.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥🔥\nSalsa de ají Habanero, nuestra salsa mas picante. \nExtra Hot level: 🔥🔥🔥🔥🔥🔥\nHabanero Hot Sauce, our spiciest sauce"
    },
    {
        id: 5,
        nombre: "AJÍ AHUMADO/SMOKED CHILLI SAUCE \n165g",
        precio: 3.25,
        categoria: "aji",
        img: "imagenes/productos/Aji_Ahumado.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥\nSalsa de ají ahumado. \n Hot level:🔥🔥🔥🔥 \nSmoked Chilli Sauce"
    },
    {
        id: 6,
        nombre: "AJÍ TOMATE/TOMATE HOT SACUE \n165g",
        precio: 3.25,
        categoria: "aji",
        img: "imagenes/productos/Aji_Tomate.jpeg",
        descripcion: "Nivel de picor: 🔥🔥\nSalsa de ají de tomate.\n Low level: 🔥🔥\nTomato hot sauce"
    },
    {
        id: 7,
        nombre: "AJÍ MARACUYA/PASION FRUIT CHILLI SAUCE \n100g",
        precio: 1.5,
        categoria: "aji",
        img: "imagenes/productos/aji_mini_maracuya.jpeg",
        descripcion: "Nivel de picor: 🔥🔥\nSalsa de ají de maracuya, ganadora en el año 2019 en el concurso internacional HOT SUMMER NIGHT.\n Low level: 🔥🔥 \nPassion fruit chili sauce, champion in 2017 at the international HOT SUMMER NIGHT competition."
    },
    {
        id: 8,
        nombre:"AJÍ ROCOTO ROJO/RED ROCOTO HOT SAUCE \n100g",
        precio: 1.5,
        categoria: "aji",
        img: "imagenes/productos/aji_mini_rocoto.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥\nSalsa de ají rocoto rojo.\n Hot level: 🔥🔥🔥🔥 \nRocoto Red Hot Sauce."
    },
    {
        id: 9,
        nombre:"AJÍ ROCOTO AMARILLO/ROCOTO YELLOW HOT SAUCE \n100g",
        precio: 1.5,
        categoria: "aji",
        img: "imagenes/productos/aji_mini_rocotoAmarillo.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥\nSalsa de ají rocoto amarillo. \n Hot level: 🔥🔥🔥🔥🔥 \nRocoto Yellow Hot Sauce."
    },
    {
        id: 10,
        nombre: "AJÍ HABANERO/HABANERO HOT SAUCE \n100g",
        precio: 1.5,
        categoria: "aji",
        img: "imagenes/productos/aji_mini_habanero.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥🔥\nSalsa de ají Habanero, nuestra salsa mas picante. \nExtra Hot level: 🔥🔥🔥🔥🔥🔥\nHabanero Hot Sauce, our spiciest sauce"
    },
    {
        id: 12,
        nombre: "AJÍ SECO/CHILLI FLAKES\n100g",
        precio: 4,
        categoria: "aji",
        img: "",
        descripcion: "Nivel de picor: 🔥🔥🔥\nAjí deshidratado en hojuelas.\n Medium level: 🔥🔥🔥\nChilli Flakes"
    },
    {
        id: 11,
        nombre: "AJÍ SECO/CHILLI FLAKES\n30g",
        precio: 2.25,
        categoria: "aji",
        img: "imagenes/productos/aji_seco.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥\nAjí deshidratado en hojuelas.\n Medium level: 🔥🔥🔥\nChilli Flakes"
    },
    {
        id: 13,
        nombre: "PASTA DE AJI HABANERO EN ACEITE DE OLIVA/Habanero pepper paste in olive oil\n165g",
        precio: 5,
        categoria: "aji",
        img: "imagenes/productos/pasta_habanero.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥🔥\nPasta de ají Habanero, Picante pero llena de sabor.\nExtra Hot level: 🔥🔥🔥🔥🔥🔥\nHabanero chili paste, spicy but full of flavor."
    },
    {
        id: 14,
        nombre: "ENCURTIDO DE AJI HABANERO EN ACEITE DE OLIVA/PICKLED HABANERO PEPPERS IN OLIVE OIL\n165g",
        precio: 5,
        categoria: "aji",
        img: "imagenes/productos/encurtido_habanero.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥🔥\nExtra Hot level: 🔥🔥🔥🔥🔥🔥\nPickled habanero peppers spicy but full of flavor."
    },
    {
        id: 15,
        nombre: "ENCURTIDO DE AJI PICANTE JALAPEÑO EN VINAGRE/PICKLED HOT JALAPEÑO PEPPER IN VINEGAR\N165g",
        precio: 5,
        categoria: "aji",
        img: "imagenes/productos/encurtido_jalapeño.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥🔥\n.Jalapeños encurtidos picantes\nExtra Hot level: 🔥🔥🔥🔥🔥🔥\nSpicy pickled jalapeños"
    },
    {
        id: 15,
        nombre: "ENCURTIDO DE AJI AGRIDULCE JALAPEÑO EN VINAGRE/Sweet and Sour Jalapeño Peppers in Vinegar\n500g",
        precio: 8,
        categoria: "aji",
        img: "imagenes/productos/encurtido_jalapeño_agridulce.jpeg",
        descripcion: "Nivel de picor: 🔥🔥🔥🔥🔥🔥\nJalapeños encurtidos agridulces.\nExtra Hot level: 🔥🔥🔥🔥🔥🔥\nSweet and sour pickled jalapeños."
    },
    {
        id: 16,
        nombre: "MIX QUESOS MADUROS/MIX OF MATURE CHEESES \n400g",
        precio: 12.5,
        categoria: "queso",
        img: "imagenes/productos/MixQuesos.jpeg",
        descripcion: "Quesos maduros artesanales\nConservar refrigerado\nArtisan mature cheeses\nKeep refrigerated.."
    },
    {
        id: 16,
        nombre: "MIX QUESOS MADUROS/MIX OF MATURE CHEESES \n200g",
        precio: 6.75,
        categoria: "queso",
        img: "imagenes/productos/MixQuesos.jpeg",
        descripcion: "Quesos maduros artesanales\nConservar refrigerado\nArtisan mature cheeses\nKeep refrigerated.."
    },
    {
        id: 17,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE MEDIO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY MEDIUM ROAST\n 1kg",
        precio: 18,
        categoria: "cafe",
        img: "imagenes/productos/cafe_grande_medio.jpeg",
        descripcion: "Café origen lojano de altura"
    },
    {
        id: 17,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE MEDIO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY MEDIUM ROAST\n 400g",
        precio: 10,
        categoria: "cafe",
        img: "imagenes/productos/cafe_grande_medio.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 18,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE MEDIO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY MEDIUM ROAST\n 200g",
        precio: 5,
        categoria: "cafe",
        img: "imagenes/productos/cafe_grande_medio.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 19,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE MEDIO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY MEDIUM ROAST \n100g",
        precio: 2.5,
        categoria: "cafe",
        img: "imagenes/productos/cafe_grande_medio.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE OSCURO/LOJANO COFFEE DOÑA DORITA ARABIC VARIETY DARK ROAST\n 1kg",
        precio: 18,
        categoria: "cafe",
        img: "imagenes/productos/cafe_pequeño_oscuro.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE OSCURO/LOJANO COFFEE DOÑA DORITA ARABIC VARIETY DARK ROAST\n 400g",
        precio: 10,
        categoria: "cafe",
        img: "imagenes/productos/cafe_pequeño_oscuro.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE OSCURO/LOJANO COFFEE DOÑA DORITA ARABIC VARIETY DARK ROAST\n 200g",
        precio: 5,
        categoria: "cafe",
        img: "imagenes/productos/cafe_pequeño_oscuro.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE OSCURO/LOJANO COFFEE DOÑA DORITA ARABIC VARIETY DARK ROAST\n 100g",
        precio: 2.5,
        categoria: "cafe",
        img: "imagenes/productos/cafe_pequeño_oscuro.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE MEDIO EN GRANO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY MEDIUM ROAST BEANS\n 1kg",
        precio: 18,
        categoria: "cafe",
        img: "",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE MEDIO EN GRANO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY MEDIUM ROAST BEANS\n 400kg",
        precio: 10,
        categoria: "cafe",
        img: "",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE MEDIO EN GRANO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY MEDIUM ROAST BEANS\n 200g",
        precio: 5,
        categoria: "cafe",
        img: "",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE OSCURO EN GRANO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY DARK ROAST BEANS\n 1kg",
        precio: 18,
        categoria: "cafe",
        img: "imagenes/productos/cafe_grano.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE OSCURO EN GRANO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY DARK ROAST BEANS\n 400kg",
        precio: 10,
        categoria: "cafe",
        img: "imagenes/productos/cafe_grano.jpeg",
        descripcion: "Café origen lojano de altura."
    },
    {
        id: 20,
        nombre: "CAFÉ LOJANO DOÑA DORITA VARIEDAD ARABIGO TUESTE OSCURO EN GRANO/LOJANO COFFEE DOÑA DORITA ARABICA VARIETY DARK ROAST BEANS\n 200g",
        precio: 5,
        categoria: "cafe",
        img: "imagenes/productos/cafe_grano.jpeg",
        descripcion: "Café origen lojano de altura."
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos(lista) {
    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = "";

    lista.forEach(p => {
        const nombreLimpio = p.nombre.replace(/\n/g, "<br>");

        contenedor.innerHTML += `
            <div class="producto">
                <div class="imagen-contenedor" style="position:relative;">
                    <img src="${p.img}" alt="${p.nombre}">
                    <div class="descripcion">
                        ${p.descripcion} 
                    </div>
                </div>
                <h3>${nombreLimpio}</h3>
                <p>$${p.precio.toFixed(2)}</p>
                <button onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
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

    filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
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
    const contadorMenu = document.getElementById("num-carrito");

    contenedor.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach((p, index) => {
        if (!p.cantidad) p.cantidad = 1;
        const subtotal = p.precio * p.cantidad;
        total += subtotal;
        cantidadTotal += p.cantidad;

        contenedor.innerHTML += `
            <div class="item-carrito" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <p style="margin: 0;">✅ ${p.nombre} x${p.cantidad} - $${subtotal.toFixed(2)}</p>
                <button onclick="eliminarDelCarrito(${index})" style="width: auto; background: #e74c3c; padding: 5px 10px; border-radius: 5px;">🗑️</button>
            </div>
        `;
    });

    totalElemento.innerText = total.toFixed(2);
    if(contadorMenu) {
        contadorMenu.innerText = cantidadTotal;
    }
}

function eliminarDelCarrito(index) {
    // Si hay más de uno, restamos cantidad, si hay solo uno, eliminamos el item
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1);
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function mostrarError(mensaje) {
    const contenedorError = document.getElementById("mensaje-error");
    contenedorError.innerText = mensaje;
    
    // El mensaje desaparece después de 5 segundos
    setTimeout(() => {
        contenedorError.innerText = "";
    }, 5000);
}

async function comprar() {
    const contenedorError = document.getElementById("mensaje-error");
    contenedorError.innerText = ""; // Limpiar errores previos

    const datos = {
        nombre: document.getElementById("nombre").value.trim(),
        cedula: document.getElementById("cedula").value.trim(),
        direccion: document.getElementById("direccion").value.trim(),
        ciudad: document.getElementById("ciudad").value.trim(),
        postal: document.getElementById("postal").value.trim(),
        email: document.getElementById("email").value.trim(),
        telefono: document.getElementById("telefono").value.trim(),
        total: document.getElementById("total").innerText
    };

    // Validaciones usando la nueva función mostrarError
    if (carrito.length === 0) {
        mostrarError("❌ El carrito está vacío.");
        return;
    }

    if (!datos.nombre || !datos.cedula || !datos.direccion || !datos.ciudad || !datos.email || !datos.telefono) {
        mostrarError("⚠️ Por favor, completa todos los campos obligatorios.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datos.email)) {
        mostrarError("📧 El formato del correo electrónico no es válido.");
        return;
    }

    if (datos.cedula.length < 10) {
        mostrarError("🪪 La cédula o RUC debe tener al menos 10 dígitos.");
        return;
    }

    // Si pasa todas las validaciones, procedemos
    const listaProductos = carrito.map(p => `- ${p.nombre} (x${p.cantidad}): $${(p.precio * p.cantidad).toFixed(2)}`).join("\n");

    try {
        const respuesta = await fetch("enviar_pedido.php", {
            method: "POST",
            body: JSON.stringify({ ...datos, productos: listaProductos })
        });

        const resultado = await respuesta.json();

        if (resultado.status === "success") {
            // Mensaje de éxito (puedes ponerlo en verde temporalmente)
            contenedorError.style.color = "#28a745";
            contenedorError.innerText = "✅ ¡Pedido enviado con éxito!";
            
            let mensajeWa = `Hola El Chacarero, soy ${datos.nombre}. Acabo de realizar un pedido.\nTotal: $${datos.total}`;
            window.open(`https://wa.me/593XXXXXXXXX?text=${encodeURIComponent(mensajeWa)}`, '_blank');

            carrito = [];
            localStorage.removeItem("carrito");
            actualizarCarrito();
            
            // Limpiar campos
            document.querySelectorAll("#carrito input").forEach(i => i.value = "");
        } else {
            mostrarError("❌ Hubo un error en el servidor.");
        }
    } catch (error) {
        mostrarError("📡 No se pudo conectar con el servidor.");
    }
}

function vaciarCarrito() {
    if (confirm("¿Estás seguro de que quieres vaciar todo el carrito?")) {
        carrito = [];
        localStorage.removeItem("carrito");
        actualizarCarrito();
    }
}

mostrarProductos(productos);
actualizarCarrito();