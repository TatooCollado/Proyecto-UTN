document.addEventListener('DOMContentLoaded', function () {
    const formularioAcceso = document.getElementById('formularioacceso');
    const formularioRecuperar = document.getElementById('formulariorecuperar');

    function mostrarExito() {
        const mensaje = document.getElementById('mensajeExito');
        if (mensaje) {
            mensaje.textContent = 'Formulario enviado con éxito';
            mensaje.style.display = 'block';
        } else {
            alert('Formulario enviado con éxito!');
        }
    }

    function validarEmail(inputId, errorId) {
        const email = document.getElementById(inputId).value.trim();
        const error = document.getElementById(errorId);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            error.textContent = 'El e-mail es obligatorio';
            return false;
        } else if (!regex.test(email)) {
            error.textContent = 'Ingrese un formato de e-mail válido';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

    function validarContraseña() {
        const contraseña = document.getElementById('contraseña').value.trim();
        const error = document.getElementById('contraseñaError');

        if (contraseña === '') {
            error.textContent = 'La contraseña es obligatoria';
            return false;
        } else if (contraseña.length < 8) {
            error.textContent = 'La contraseña debe tener como mínimo 8 caracteres';
            return false;
        } else if (!/[A-Z]/.test(contraseña)) {
            error.textContent = 'La contraseña debe incluir al menos una letra mayúscula.';
            return false;
        } else if (!/[0-9]/.test(contraseña)) {
            error.textContent = 'La contraseña debe incluir al menos un número.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

    formularioAcceso.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailValido = validarEmail('email', 'emailError');
        const contraseñaValida = validarContraseña();

        if (emailValido && contraseñaValida) {
            mostrarExito();
        }
    });

    formularioRecuperar.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailValido = validarEmail('recuperarcontraseñaemail', 'recuperarError');

        if (emailValido) {
            mostrarExito();
        }
    });

    document.getElementById('email').addEventListener('input', () => validarEmail('email', 'emailError'));
    document.getElementById('email').addEventListener('blur', () => validarEmail('email', 'emailError'));

    document.getElementById('contraseña').addEventListener('input', validarContraseña);
    document.getElementById('contraseña').addEventListener('blur', validarContraseña);

    document.getElementById('recuperarcontraseñaemail').addEventListener('input', () => validarEmail('recuperarcontraseñaemail', 'recuperarError'));
    document.getElementById('recuperarcontraseñaemail').addEventListener('blur', () => validarEmail('recuperarcontraseñaemail', 'recuperarError'));
});
