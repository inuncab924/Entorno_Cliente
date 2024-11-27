class Cesta {
  #productos = [];
  #total = 0;

  constructor(productos) {
    this.productos = productos;
    this.cesta = cesta; // Referencia a la cesta (instancia de la clase Cesta)
    // this.#load(); // carga productos disponibles desde cesta
  }

  pintarCesta() {
    // acumular cesta
    // vaciar cesta
    // crear elementos a partir de la cesta
    // obtener el item de la base de productos por su id
    // generar fila tabla
    // pintar total y total iva
  }

  AnadirCesta(idBot, cant) {
    // busca el id en el array de objetos producto
    let productoBuscar = productos.find((producto) => producto.id === idBot);

    // si no existe lo añade y si existe lo suma
    if (this.productoBuscar){
        producto.cant += cant
    }
    // Renderizar la cesta
    this.pintarCesta();
  }
}
