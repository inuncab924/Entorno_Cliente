class Cesta {
  #productos = [];

  constructor(productos) {
    this.productos = productos; // Productos disponibles
  }

  pintarCesta() {
    const tbody = document.getElementById("cesta");
    tbody.innerHTML = ""; // Limpiar la tabla antes de rellenarla

    let total = 0;

    // Recorrer los productos de la cesta para pintar filas
    this.#productos.forEach((producto) => {
        const subtotal = producto.cant * producto.precio;
        total += subtotal;

        // Crear una fila
        const fila = document.createElement("tr");

        // Columna: id
        const celdaId = document.createElement("td");
        celdaId.textContent = producto.id;
        fila.appendChild(celdaId);

        // Columna: Nombre
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;
        fila.appendChild(celdaNombre);

        // Columna: Cantidad
        const celdaCant = document.createElement("td");
        celdaCant.textContent = producto.cant;
        fila.appendChild(celdaCant);

        // Columna: Precio
        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = producto.precio.toFixed(2);
        fila.appendChild(celdaPrecio);

        // Columna: Subtotal
        const celdaSubtotal = document.createElement("td");
        celdaSubtotal.textContent = subtotal.toFixed(2);
        fila.appendChild(celdaSubtotal);

        tbody.appendChild(fila);
    });

    // Actualizar el total y total con IVA
    const totalIva = total * 1.21;
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("totalIva").textContent = totalIva.toFixed(2);
  }

  AnadirCesta(idBot, cant) {
    // Buscar el producto en el array original de productos
    let productoBuscar = this.productos.find((producto) => producto.id === idBot);

    // Si el producto ya está en la cesta, aumentar la cantidad
    let productoEnCesta = this.#productos.find((producto) => producto.id === idBot);
    if (productoEnCesta) {
        productoEnCesta.cant += parseInt(cant);
    } else {
        // Si no está en la cesta, añadirlo con la cantidad inicial
        this.#productos.push({ ...productoBuscar, cant: parseInt(cant) });
    }

    // Actualizar la tabla de la cesta
    this.pintarCesta();
  }
}

// Cuando la página cargue, se inicie la cesta
window.onload = function () {
  const cesta = new Cesta(productos); // Creamos un objeto de la clase Cesta con los productos disponibles
  cesta.pintarCesta(); // Llamamos al método para pintar la cesta
};
