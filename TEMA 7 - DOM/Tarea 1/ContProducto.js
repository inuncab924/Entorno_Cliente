class ContProductos {
  #cesta = [];

  constructor(productos) {
    this.productos = productos;
    this.contenedor = document.getElementById("contProductos"); 
    
  }

  pintarProductos() {
    this.productos.forEach((producto) => {
      // Crear la card de producto
      let nuevoDiv = document.createElement("div");
      nuevoDiv.className = "card";
      nuevoDiv.style.maxWidth = "300px";
      nuevoDiv.style.minWidth = "150px";
      nuevoDiv.style.width = "100%";

      // Crear la imagen
      let imagen = document.createElement("img");
      imagen.src = producto.imagen;
      imagen.className = "card-img-top";
      imagen.alt = producto.nombre;
      imagen.style.maxWidth = "100%";
      imagen.style.height = "auto";

      // Crear el cuerpo del card
      let cuerpoCard = document.createElement("div");
      cuerpoCard.className = "card-body";

      // Crear el título
      let tituloCard = document.createElement("h5");
      tituloCard.className = "card-title";
      tituloCard.textContent = producto.nombre;

      // Crear el input de cantidad
      let input = document.createElement("input");
      input.type = "number";
      input.step = "1.00";
      input.placeholder = "Cantidad";

      // Crear el botón para añadir
      let boton = document.createElement("a");
      boton.href = "#";
      boton.className = "btn btn-primary";
      boton.textContent = "Añadir";

      // Añadir los elementos al cuerpo de la card
      cuerpoCard.appendChild(tituloCard);
      cuerpoCard.appendChild(input);
      cuerpoCard.appendChild(boton);

      // Añadir la imagen y el cuerpo al contenedor del card
      nuevoDiv.appendChild(imagen);
      nuevoDiv.appendChild(cuerpoCard);

      // Añadir la card al contenedor principal
      this.contenedor.appendChild(nuevoDiv);
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
  const contenedorProductos = new ContProductos(productos); 
  contenedorProductos.pintarProductos(); 
};
