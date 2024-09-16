let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');
let fortaleza = document.getElementById('fortaleza');

const cadenadeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 8) { 
        alert("La cantidad de caracteres tiene que ser igual o mayor a 8");
        return; 
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenadeCaracteres[Math.floor(Math.random() * cadenadeCaracteres.length)];
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }

    contrasena.value = password;
    verificarFortaleza(password);
}

function verificarFortaleza(password) {
    const regexNumeros = /\d/; 

    if (regexNumeros.test(password)) {
        fortaleza.textContent = "Fuerte";
        fortaleza.style.color = 'green'; 
    } else {
        fortaleza.textContent = "Débil";
        fortaleza.style.color = 'red'; 
    }
}
    function limpiarContrasena() {
    contrasena.value = ''; 
}

boton.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiarContrasena);










