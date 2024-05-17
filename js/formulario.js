const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    email: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            // if(expresiones.nombre.test(e.target.value)){
            //     document.getElementById('grupo__nombre').classList.remove('form_input__grupo-incorrecto');
            //     document.getElementById('grupo__nombre').classList.add('form_input__grupo-correcto');
            //     document.querySelector('#grupo__nombre .form__input-error').classList.remove('form__input-error-activo')

            // } else{
            //     document.getElementById('grupo__nombre').classList.add('form_input__grupo-incorrecto');
            //     document.getElementById('grupo__nombre').classList.remove('form_input__grupo-correcto');
            //     document.querySelector('#grupo__nombre .form__input-error').classList.add('form__input-error-activo');
            // }
        break;    
        case "email":
            validarCampo(expresiones.email, e.target, 'email')
        break;    
        case "mensaje":

        break;    
  
    }
}


const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('form_input__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('form_input__grupo-correcto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo')
        campos[campo] = true
    } else{
        document.getElementById(`grupo__${campo}`).classList.add('form_input__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('form_input__grupo-correcto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
        campos[campo] = false
    }
}

input.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);//Cuando levante la tecla se ejecuta esta funcion
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();

    const terminos = document.getElementById('terminos')
    if(campos.nombre && campos.email && terminos.cheked){
        formulario.reset();

    }
})