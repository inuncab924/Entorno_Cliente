class ContProductos {
  #cesta = [];

  // Aquí guardamos los productos y el contenedor donde vamos a mostrarlos
  constructor(productos) {
    this.productos = productos; 
    this.contenedor = document.getElementById("contProductos"); // Buscamos el lugar donde queremos mostrar los productos
    this.renderizarProductos(); 
  }

  // Este método va a poner los productos en la página
  renderizarProductos(){
    // Recorremos todos los productos y creamos su contenedor
    this.productos.forEach(producto => {
      // Crea un contenedor div para cada producto
      var div = document.createElement("div");
      div.setAttribute("class", "producto"); 

      // Crear la imagen del producto
      var img = document.createElement("img");
      img.setAttribute("src", producto.imagen); 
      img.setAttribute("alt", producto.nombre); 
      img.setAttribute("class", "producto-imagen"); 

      // Crear el nombre del producto
      var nombre = document.createElement("h2");
      nombre.textContent = producto.nombre; 

      // Crear el precio del producto
      var precio = document.createElement("p");
      precio.textContent = `Precio: $${producto.precio}`;

      // Agregar la imagen, nombre y precio al div del producto
      div.appendChild(img);
      div.appendChild(nombre);
      div.appendChild(precio);

      // Agregar el div del producto al contenedor en el HTML
      this.contenedor.appendChild(div);
    });
  }
}

// Los productos que vamos a mostrar
var productos = [
  {
    id: "1",
    nombre: "Zanahoria",
    precio: 15.99,
    imagen:
      "https://cdn.pixabay.com/photo/2016/07/29/12/50/vegetable-1553195_1280.jpg",
  },
  {
    id: "2",
    nombre: "Calabaza",
    precio: 60.0,
    imagen:
      "https://cdn.pixabay.com/photo/2023/09/27/02/39/pumpkin-8278499_1280.jpg",
  },
  {
    id: "3",
    nombre: "Melocotón",
    precio: 12.5,
    imagen:
      "https://cdn.pixabay.com/photo/2019/07/31/16/44/peaches-4375600_960_720.jpg",
  },
  {
    id: "4",
    nombre: "Naranja",
    precio: 20.0,
    imagen:
      "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg",
  },
  {
    id: "5",
    nombre: "Mango",
    precio: 85.0,
    imagen:
      "https://media.istockphoto.com/id/686104710/es/foto/mango-fruta-y-rebanadas-de-mango.jpg?s=2048x2048&w=is&k=20&c=mva961qSVAkWu6IsZ8ss8gJXuQU56ZCF8TYGZVhC57E=",
  },
  {
    id: "6",
    nombre: "Manzana",
    precio: 45.0,
    imagen:
      "https://cdn.pixabay.com/photo/2016/07/21/09/04/apple-1532055_1280.jpg",
  },
];

// Cuando la página cargue, mostramos los productos
window.onload = function () {
  new ContProductos(productos); // Creamos un objeto de la clase para mostrar los productos
};
