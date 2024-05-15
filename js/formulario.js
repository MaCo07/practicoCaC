const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = () => {
    console.log('se ejcuto')
}

input.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);//Cuando levante la tecla se ejecuta esta funcion
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
});