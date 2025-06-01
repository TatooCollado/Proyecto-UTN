document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioContacto");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const emailValido = validarEmail();
    const razonValida = validarRazon();
    const comentarioValido = validarComentario();

    if (nombreValido && apellidoValido && emailValido && razonValida && comentarioValido) {
      mostrarExito();
    }
  });

  const campoNombre = document.getElementById("nombre");
  const campoApellido = document.getElementById("apellido");
  const campoEmail = document.getElementById("email");
  const campoRazon = document.getElementById("razon");
  const campoComentario = document.getElementById("comentario");

  campoNombre.addEventListener("input", validarNombre);
  campoNombre.addEventListener("blur", validarNombre);

  campoApellido.addEventListener("input", validarApellido);
  campoApellido.addEventListener("blur", validarApellido);

  campoEmail.addEventListener("input", validarEmail);
  campoEmail.addEventListener("blur", validarEmail);

  campoRazon.addEventListener("change", validarRazon);
  campoRazon.addEventListener("blur", validarRazon);

  campoComentario.addEventListener("input", validarComentario);
  campoComentario.addEventListener("blur", validarComentario);

  function mostrarExito() {
    if (!document.getElementById("mensaje-exito")) {
      const mensajeExito = document.createElement("p");
      mensajeExito.id = "mensaje-exito";
      mensajeExito.textContent = "Formulario enviado con éxito!";

      formulario.parentNode.appendChild(mensajeExito);

      setTimeout(() => {
        formulario.submit();
      }, 3000);
    }
  }

  function validarNombre() {
    const nombre = campoNombre.value.trim();
    const error = document.getElementById("error-nombre");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

    if (nombre === "") {
      error.textContent = "El nombre es obligatorio.";
      return false;
    } else if (!regex.test(nombre)) {
      error.textContent = "Debe ingresar solo letras (mínimo 3).";
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  }

  function validarApellido() {
    const apellido = campoApellido.value.trim();
    const error = document.getElementById("error-apellido");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

    if (apellido === "") {
      error.textContent = "El apellido es obligatorio.";
      return false;
    } else if (!regex.test(apellido)) {
      error.textContent = "Debe ingresar solo letras (mínimo 3).";
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  }

  function validarEmail() {
    const email = campoEmail.value.trim();
    const error = document.getElementById("error-email");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
      error.textContent = "El e-mail es obligatorio.";
      return false;
    } else if (!regex.test(email)) {
      error.textContent = "Debe ingresar un e-mail válido.";
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  }

  function validarRazon() {
    const razon = campoRazon.value;
    const error = document.getElementById("error-razon");

    if (!razon) {
      error.textContent = "Debe seleccionar una razón.";
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  }

  function validarComentario() {
    const comentario = campoComentario.value.trim();
    const error = document.getElementById("error-comentario");

    if (comentario.length < 10) {
      error.textContent = "El mensaje debe tener al menos 10 caracteres.";
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  }
});
