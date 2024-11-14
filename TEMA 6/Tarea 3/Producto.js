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
    this.#id = id;
    this.#nombre = nombre;
    this.#precio = precio;
    this.#imagen = imagen;
    return this.#producto;
  }


}
