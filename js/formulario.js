
function validarFormulario() {
    // Obtener los elementos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const condiciones = document.getElementById('condiciones').checked;

    // Obtener los elementos para mostrar errores
    const errorNombre = document.querySelector('#grupo__nombre .form__input-error');
    const errorEmail = document.querySelector('#grupo__email .form__input-error');
    const errorMensaje = document.getElementById('formulario__mensaje');
    const mensajeExito = document.getElementById('formulario__mensaje-exito');

    // Reiniciar los mensajes de error
    errorNombre.style.display = 'none';
    errorEmail.style.display = 'none';
    errorMensaje.style.display = 'none';
    mensajeExito.style.display = 'none';

    let esValido = true;

    // Validar el nombre
    if (nombre === '' || /\d|[^a-zA-Z\s]/.test(nombre)) {
        errorNombre.style.display = 'block';
        esValido = false;
    }

    // Validar el email
    if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        errorEmail.style.display = 'block';
        esValido = false;
    }

    // Validar el mensaje
    if (mensaje === '') {
        errorMensaje.style.display = 'block';
        esValido = false;
    }

    // Validar las condiciones
    if (!condiciones) {
        errorMensaje.style.display = 'block';
        esValido = false;
    }

    // Si el formulario es válido, mostrar mensaje y limpiar campos
    if (esValido) {
        document.getElementById('formulario').reset();
        mensajeExito.style.display = 'block';
    }
}