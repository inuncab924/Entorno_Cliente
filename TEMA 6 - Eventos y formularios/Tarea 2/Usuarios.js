class Usuario {
  // Atributos

  #users = [
    { nombre: "marta", pass: "Hola1234" },
    { nombre: "lolo", pass: "Verano2024" },
    { nombre: "pepe", pass: "Casa1Azul" },
  ];

  // constructor (no hace falta)

  constructor() {}

  // metodo que compruba si los dos datos introducidos son correctos
  comprobar(event) {


    // almacenar los valores del formulario html
    var nombre = document.getElementById("nombre").value;
    var pass = document.getElementById("pass").value;

    // comparar los valores
    // El metodo .some devuelve true o false
    let usuarioEncontrado = this.#users.some(
        (usuario) => usuario.nombre === nombre && usuario.pass === pass
      );

    if (usuarioEncontrado) {
      alert("Se ha iniciado sesion");
    }else{
        event.preventDefault(); // no se envia el formulario capando el submit del boton
        alert("No coinciden usuario o contraseña")
    }
  }
}


//Crear una instancia y asignar el evento de carga a los dos metodos
window.onload = () => {
  const instancia = new Usuario();
  // Asigna el evento al bonton cuando se pulsa
  document.getElementById("botonIniciar").onclick = (event) => instancia.comprobar(event);
};
