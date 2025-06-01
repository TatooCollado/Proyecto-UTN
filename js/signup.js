document.addEventListener("DOMContentLoaded", function () {

  
  const formulario = document.getElementById("formularioRegistro");

  formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const emailValido = validarEmail();
    const telefonoValido = validarTelefono();
    const fechaValida = validarFecha();
    const contraseñaValida = validarContraseña();
    const confirmarContraseña = validarConfirmarContraseña();

    if (nombreValido && apellidoValido && emailValido && telefonoValido && fechaValida
      && contraseñaValida && confirmarContraseña) {
      mostrarExito();
    }

  });

  const campoNombre = document.getElementById("nombre");
  const campoApellido = document.getElementById("apellido")
  const campoEmail = document.getElementById("email");
  const campoTelefono = document.getElementById("telefono");
  const campoFecha = document.getElementById("fecha");
  const campoContraseña = document.getElementById("contraseña");
  const campoConfirmar_contraseña = document.getElementById("confirmarContraseña");

  campoNombre.addEventListener("input", validarNombre);
campoNombre.addEventListener("blur", validarNombre);

campoApellido.addEventListener("input", validarApellido);
campoApellido.addEventListener("blur", validarApellido);

campoEmail.addEventListener("input", validarEmail);
campoEmail.addEventListener("blur", validarEmail);

campoTelefono.addEventListener("input", validarTelefono);
campoTelefono.addEventListener("blur", validarTelefono);

campoFecha.addEventListener("input", validarFecha);
campoFecha.addEventListener("blur", validarFecha);

campoContraseña.addEventListener("input", () => {
  validarContraseña();
  validarConfirmarContraseña();
});
campoContraseña.addEventListener("blur", () => {
  validarContraseña();
  validarConfirmarContraseña();
});

campoConfirmar_contraseña.addEventListener("input", validarConfirmarContraseña);
campoConfirmar_contraseña.addEventListener("blur", validarConfirmarContraseña);
});


function mostrarExito() {
  const formulario = document.getElementById("formularioRegistro");

  if (!document.getElementById("mensaje-exito")) {
    const mensajeExito = document.createElement("p");
    mensajeExito.id = "mensaje-exito";
    mensajeExito.textContent = "Formulario fue enviado con éxito!";
    mensajeExito.style.color = "green";

    formulario.parentNode.appendChild(mensajeExito);

    setTimeout(() => {
      formulario.submit();
    }, 3000);
  }
}


function validarNombre() {
  const nombre = document.getElementById("nombre").value.trim();
  const error = document.getElementById("error-nombre");

  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

  if (nombre === "") {
    error.textContent = "El nombre es obligatorio.";
    return false;
  } else if (!regex.test(nombre)) {
    error.textContent = "Debe ingresar únicamente letras (mínimo 3).";
    return false;
  } else {
    error.textContent = '';
    return true;
  }
}

function validarApellido() {
  const apellido = document.getElementById("apellido").value.trim();
  const error = document.getElementById("error-apellido");

  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

  if (apellido === "") {
    error.textContent = "El apellido es obligatorio.";
    return false;
  } else if (!regex.test(apellido)) {
    error.textContent = "Debe ingresar únicamente letras (mínimo 3).";
    return false;
  } else {
    error.textContent = '';
    return true;
  }
}

function validarEmail() {
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error-email");

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === '') {
    error.textContent = "El e-mail es obligatorio.";
    return false;
  } else if (!regex.test(email)) {
    error.textContent = "Debe ingresar un e-mail válido";
    return false;
  } else {
    error.textContent = '';
    return true;
  }

}

function validarTelefono() {
  const telefono = document.getElementById("telefono").value.trim();
  const error = document.getElementById("error-telefono");

  const regex = /^\+?[\d\s\-().]{6,}$/;

  if (!telefono) {
    error.textContent = "El teléfono es obligatorio.";
    return false;
  } else if (!regex.test(telefono)) {
    error.textContent = "Debe ingresar un teléfono válido";
    return false;
  } else {
    error.textContent = '';
    return true;
  }
}

function validarFecha() {
  const fecha = document.getElementById("fecha").value.trim();
  const error = document.getElementById("error-fecha");
  const fechaSeleccionada = new Date(fecha);
  const hoy = new Date();

  if (fecha === '') {
    error.textContent = "La fecha de nacimiento es obligatoria.";
    return false;
  }
  else if (fechaSeleccionada > hoy) {
    error.textContent = "La fecha no puede ser posterior a hoy.";
    return false;
  } else {
    error.textContent = '';
    return true;
  }
}

function validarContraseña() {
  const contraseña = document.getElementById("contraseña").value.trim();
  const error = document.getElementById("error-contraseña");

  const tieneLongitud = contraseña.length >= 8;
  const tieneNumero = /\d/.test(contraseña);
  const tieneMayuscula = /[A-Z]/.test(contraseña);

  if (!tieneLongitud || !tieneNumero || !tieneMayuscula) {
    error.textContent = "La contraseña debe tener al menos 8 caracteres, 1 número y 1 mayúscula.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}
function validarConfirmarContraseña() {
  const confirmarContraseña = document.getElementById("confirmarContraseña").value.trim();
  const error = document.getElementById("error-confirmarContraseña");
  const contraseña = document.getElementById("contraseña").value.trim();

  if (confirmarContraseña === contraseña) {
    error.textContent = "";
    return true;
  } else {
    error.textContent = "Las contraseñas no coinciden.";
    return false;
  }

}