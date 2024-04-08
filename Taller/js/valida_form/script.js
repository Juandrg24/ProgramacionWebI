// alert ("Integrado con Javascript");
function validar() {
    let validado = true;
    let msgs = document.querySelectorAll("small[id^='msg']");
    console.log(msgs);

    //Este for se encarga de recorrer cada elemento small y lo limpia 
    for (let m of msgs) {//Of Toma el valor no el indice 
        m.innerHTML = "";
    }

    //1-Obtenemos controladores del formulario

    let texto = document.getElementById('texto');
    let clave = document.querySelector('#clave');
    let entero = document.querySelector('input[name="vlrEntero"]');
    let chks = document.getElementsByName('chk');
    let radios = document.getElementsByName('radio');
    let combo = document.querySelector('#combo');


    let msgTexto = document.querySelector('#msgTexto');
    let msgClave = document.querySelector('#msgClave');
    let msgEntero = document.querySelector('#msgEntero');
    let msgCheck = document.querySelector('#msgCheck');
    let msgRadio = document.querySelector('#msgRadio');
    let msgCombo = document.querySelector('#msgCombo');


    //2-Si los controles son cajas de texto o claves o areas de texto incluir expreciones regulares
    let rgxTexto = /^[a-zA-Z Á]{2,30}$/;
    let rgxClave = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10})$/;
    let rgxEntero = /^(?:\+|-)?\d+$/;


    //3-Prevalidar las cajas de checkeo y los radio botones
    //Se necesita un contador de check
    
    let cntCheck = 0;
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            cntCheck++;
        }

    }

    let esValidoRadio = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            esValidoRadio = true;
            break;
        }
    }

    
    //4-Preguntas de validacion
    if (texto.value.trim() == "" || texto.value.length == 0)//Trim elimina los espacios en blanco al principio y al final
    {
        msgTexto.innerHTML += 'El Texto No Puede Estar Vacío <br>';
        validado = false;
    }
    if (!rgxTexto.test(texto.value)) {
        msgTexto.innerHTML += 'El Texto No cumple con el formato <br>';
        validado = false;
    }

    if (!rgxClave.test(clave.value)) {
        msgClave.innerHTML += 'Clave Errada intente de nuevo <br>';
        validado = false;
    }

    if (!rgxEntero.test(entero.value)) {
        msgEntero.innerHTML += 'Ingrese un valor entero <br>';
        validado = false;
    }

    if (cntCheck < 2) {
        msgCheck.innerHTML += "Debe seleccionar almenos dos Opciones <br>";
        validado = false;
    }

    if (esValidoRadio === false) {
        msgRadio.innerHTML += 'Seleccione una opcion Radio';
        validado = false;
    }

    if (combo.selectedIndex == 0) {
        msgCombo.innerHTML += 'Seleccionar una opcion valida';
        validado = false;
    }

    //Buenas practicas se convierten los datos que son numbers 
   
    
    if (validado === true) {
    
        alert(`Texto: ${texto.value} \n Entero: ${entero.value} \n valor del Combo: ${combo.value}`);
    }


    console.log(validado);
    return validado;


}