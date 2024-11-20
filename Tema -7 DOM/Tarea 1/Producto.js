class Producto {
  // Atributos privados
  #id;
  #nombre;
  #unidadesAnadidas;
  #precio;
  #subtotal;
  #imagen;

  #producto = {};

  // Constructor
  constructor(id, nombre, precio, imagen) {
    this.#producto.id = id;
    this.#producto.nombre = nombre;
    this.#producto.precio = precio;
    this.#producto.imagen = imagen;
    return this.#producto;
  }


}
