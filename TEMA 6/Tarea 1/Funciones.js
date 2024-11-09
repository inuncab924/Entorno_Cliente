class Vehiculo {
  // Atributos
  #matricula;
  #FechaMatriculacion;
  #Bastidor;
  #Nombre;
  #Apellidos;
  #domicilio;
  #dni;
  #correo;
  #telefono;

  // Constructor 
  constructor(matricula, FechaMatriculacion, Bastidor, Nombre, Apellidos, domicilio, dni, correo, telefono) {
      this.#matricula = matricula;
      this.#FechaMatriculacion = FechaMatriculacion;
      this.#Bastidor = Bastidor;
      this.#Nombre = Nombre;
      this.#Apellidos = Apellidos;
      this.#domicilio = domicilio;
      this.#dni = dni;
      this.#correo = correo;
      this.#telefono = telefono;
  }

  /////////// CAMBIAR LABEL DNI ///////////

  // Funcion que cambia el label a Editando DNI
  cambiarEtiqueta() {
      var label = document.getElementById("labelDni");
      label.innerHTML = "Editando DNI..."; 
  }

  // Funcion que cambia el label a DNI
  restaurarEtiqueta() {
      var label = document.getElementById("labelDni");
      label.innerHTML = "DNI"; 
  }

  f1() {
      var dniInput = document.getElementById("dni");
      // Añadir un evento focus (entra foco)
      dniInput.addEventListener("focus", () => this.cambiarEtiqueta());
      // Añadir un evento blur (sale foco)
      dniInput.addEventListener("blur", () => this.restaurarEtiqueta()); 
  }
  /////////// FIN CAMBIAR LABEL DNI ///////////


  /////////// MENSAJE PERSONALIZADO MATRICULA ///////////

mensajeMatricula() {    
  // Obtiene el campo de entrada del formulario con id "matricula"
  var matriculaInput = document.getElementById("matricula");

  // Verifica si el valor introducido no es valido
  if (matriculaInput.validity.typeMismatch) {
      // Si el tipo no es correcto, establece un mensaje personalizado de error
      matriculaInput.setCustomValidity("Introduce una matrícula válida");
  } else {
      // Si el tipo es valido, borra cualquier mensaje de error
      matriculaInput.setCustomValidity("");
  }
}

// Método para agregar el evento al campo de matrícula
fEvento() {
  // Obtiene el campo de entrada del formulario con id "matricula"
  var matriculaInput = document.getElementById("matricula");

  // Agrega un escuchador de eventos para el evento "keyup" (cuando el usuario suelta una tecla)
  matriculaInput.addEventListener("keyup", () => this.mensajeMatricula()); // Llama a mensajeMatricula cuando se teclea en el campo
}
  ///////////  FIN MENSAJE PERSONALIZADO MATRICULA ///////////


}  // --> Fin de la clase Vehiculo


//Crear una instancia y asignar el evento de carga a los dos metodos 
window.onload = () => {
  const instancia = new Vehiculo();
  instancia.f1();  // Llama a f1 cuando la pagina se carga (label Dni)
  instancia.fEvento(); // Llama a fEvento para asociar el evento keyup (mensaje matricula)
};
