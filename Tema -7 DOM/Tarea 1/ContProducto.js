class ContProductos {
  // Aquí guardamos los productos y el contenedor donde vamos a mostrarlos
  constructor(productos) {
    this.productos = productos; // Guardamos la lista de productos
    this.contenedor = document.getElementById('contProductos'); // Buscamos el lugar donde queremos mostrar los productos
    this.renderizarProductos(); // Llamamos al método para mostrar los productos
  }

  // Este método va a poner los productos en la página
  renderizarProductos() {
    // Limpiamos el contenedor antes de agregar los productos
    this.contenedor.innerHTML = "";

    // Recorremos la lista de productos
    this.productos.forEach((producto, index) => {
      // Creamos un div para cada producto
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('col'); // Esto es para que cada producto se vea en columnas

      // Este es el HTML que vamos a poner para cada producto
      productoDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <input type="number" class="form-control mb-2" id="cantidadProducto${index + 1}" placeholder="Cantidad">
            <a href="#" class="btn btn-primary" id="btnAñadirProducto${index + 1}">Añadir</a>
          </div>
        </div>
      `;
      
      // Añadimos el producto al contenedor
      this.contenedor.appendChild(productoDiv);
    });
  }
}

// Los productos que vamos a mostrar
var productos = [
  { id: "1", nombre: "Zanahoria", precio: 15.99, imagen: "https://cdn.pixabay.com/photo/2016/07/29/12/50/vegetable-1553195_1280.jpg" },
  { id: "2", nombre: "Melón", precio: 60.0, imagen: "https://cdn.pixabay.com/photo/2023/09/27/02/39/pumpkin-8278499_1280.jpg" },
  { id: "3", nombre: "Melocotón", precio: 12.5, imagen: "https://cdn.pixabay.com/photo/2019/07/31/16/44/peaches-4375600_960_720.jpg" },
  { id: "4", nombre: "Naranja", precio: 20.0, imagen: "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg" },
  { id: "5", nombre: "Mango", precio: 85.0, imagen: "https://media.istockphoto.com/id/686104710/es/foto/mango-fruta-y-rebanadas-de-mango.jpg?s=2048x2048&w=is&k=20&c=mva961qSVAkWu6IsZ8ss8gJXuQU56ZCF8TYGZVhC57E=" },
  { id: "6", nombre: "Manzana", precio: 45.0, imagen: "https://cdn.pixabay.com/photo/2016/07/21/09/04/apple-1532055_1280.jpg" }
];

// Cuando la página cargue, mostramos los productos
window.onload = function() {
  new ContProductos(productos); // Creamos un objeto de la clase para mostrar los productos
}
