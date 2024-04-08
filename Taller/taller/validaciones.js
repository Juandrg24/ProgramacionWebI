function validar() {
    let validado = true;

    //Traemos todos los small y los guardamos en una variable
    let msgs = document.querySelectorAll("small[id^='msg']");

    //Limpiamos los msg con este for of
    for (let m of msgs) {
        m.innerHTML = "";
    }


    //1-Obtener controladores del formulario

    let nombre = document.getElementById('nombre');
    let edad = document.querySelector('#edad');
    let fechaentrevista = document.getElementById('fechaentrevista');
    let pin = document.querySelector('#pin');
    let radios = document.getElementsByName('experiencia');
    let nivelingles = document.getElementById('nivelingles');
    let lps = document.getElementsByName('lenguaje');
    
    let trabajarnoche= document.getElementById('trabajarnoche');
    let poderviajar= document.getElementById('poderviajar');

    let codigo = document.querySelector("#codigo");

    //msg

    let msgNombre = document.querySelector('#msgNombre');
    let msgEdad = document.querySelector('#msgEdad');
    let msgFechaentrevista = document.querySelector('#msgFechaentrevista');
    let msgPin = document.querySelector('#msgPin');
    let msgRadio = document.querySelector('#msgRadio');
    let msgNivelingles = document.querySelector('#msgNivelingles');
    let msgLp = document.querySelector('#msgLp');

    //2-Si los controladores son cajas de texto o claves o areas de texto incluir expreciones reulares

    let rgxNombre = /^[a-zA-Z Á]{3,80}$/;
    let rgxEntero = /^(?:\+|-)?\d+$/;
    let rgxFecha = /^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/;
    let rgxClave = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,10})$/;


    //3-Prevalidar las cajas de checkeo y los radio botones
    //Radios
    let esValidoRadio = false;
    for (let r of radios) {
        if (r.checked) {
            esValidoRadio = true;
            break;
        }
    }

    //Chks Lp
    let cntLp = 0;
    for (let lp of lps) {
        if (lp.checked) {
            cntLp++;
        }
    }



    //4-Preguntas de validaciones

    //Nombre
    if (nombre.value.trim() == "" || nombre.value.length == 0) {
        msgNombre.innerHTML += '<b>El Nombre No Puede Estar Vacio</b><br>';
        validado = false;
    } else if (!rgxNombre.test(nombre.value)) {
        msgNombre.innerHTML += '<b>El Nombre No Cumple con el Formato</b><br>';
        validado = false;
    }

    //Edad
    if (edad.value.trim() == "" || edad.value.length == 0) {
        msgEdad.innerHTML += '<b>La Edad No Puede Estar Vacia</b><br>';
        validado = false;
    } else if (!rgxEntero.test(edad.value)) {
        msgEdad.innerHTML += '<b>Ingrese Solo Números</b><br>';
        validado = false;
    } else if (edad.value < 16 || edad.value > 60) {
        msgEdad.innerHTML += '<b>La Edad No Se Encuentra En El Rango Deseado</b><br>';
        validado = false;
    }



    //Fecha
    if (fechaentrevista.value.trim() == "" || fechaentrevista.value.length == 0) {
        msgFechaentrevista.innerHTML += '<b>La Fecha de Entrevista No Puede Estar Vacia</b><br>';
        validado = false;
    } else if (!rgxFecha.test(fechaentrevista.value)) {
        msgFechaentrevista.innerHTML += '<b>La Fecha No Cumple Con El Formato Deseado (DD/MM/AAAA)</b><br>';
        validado = false;
    }


    //Pin
    if (pin.value.trim() == "" || pin.value.length == 0) {
        msgPin.innerHTML += '<b>El Pin No Puede Estar Vacio</b><br>';
        validado = false;
    } else if (!rgxClave.test(pin.value)) {
        msgPin.innerHTML += '<b>El Pin No Cumple Con El Formato Deseado Solo Letras y Digitos Entre 6 y 10 </b><br>';
        validado = false;
    }


    //Experiencia

    if (esValidoRadio === false) {
        msgRadio.innerHTML += '<b> Se Debe Selecionar Una Opción</b><br>';
        validado = false;
    }

    //Nivel Ingles

    if (nivelingles.selectedIndex == 0) {
        msgNivelingles.innerHTML += '<b>Seleccionar una opcion valida</b><br>';
        validado = false;
    }


    //Lenguajes de Programación

    if (cntLp == 0) {
        msgLp.innerHTML += '<b>Debe seleccionar almenos dos Opciones</b><br>';
        validado = false;
    }


    //Oculto
    
    if (validado === true) {
        codigo.value = "1002962946";
        
        if (edad.value > 18 && edad.value < 25) {
            if (nivelingles.value >= '70') {
                let requeridoLp = false;
                for (let l of lps) {
                    if (l.value == 'Java' || l.value == 'C++') {
                        requeridoLp = true;
                        break;
                    }
                }
                if(requeridoLp===true){
                    if(trabajarnoche.checked || poderviajar.checked){
                        alert("El entrevistado es apto para el cargo");
                    }
                }


            }
        }


        

        
    }



    return validado;
}
