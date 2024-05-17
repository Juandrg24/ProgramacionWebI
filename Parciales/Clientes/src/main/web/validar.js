function validacion() {
	let validado = true;

	let msgs = document.querySelectorAll("small[id^='msg']");

	//Limpiamos los msg con este for of
	for (let m of msgs) {
		m.innerHTML = "";
	}

	//Campos
	let tpidentidad = document.getElementById("tpidentidad");
	let identificacion = document.getElementById("identificacion");
	let nombre = document.getElementById("nombre");
	let dirrecion = document.getElementById("direccion");
	let telefono = document.getElementById("telefono");
	let correo = document.getElementById("correo");
	let fechaingreso = document.getElementById("fechaingreso");
	let chkcactivo = document.getElementById("chkcactivo");
	let capacredito = document.getElementById("capacredito");
	let categoria = document.getElementsByName("categoria");


	//rgx
	let rgxIdentidad = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/;
	let rgxNombre = /^[a-zA-Z Á]{4,80}$/;
	let rgxEntero = /^(?:\+|-)?\d+$/;
	let rgxCorreo = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/;
	let rgxFecha = /^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/;
	let rgxReal = /^(?:\+|-)?\d+\.\d*$/;


	//msg
	let msgTpidentidad = document.querySelector("#msgTpidentidad");
	let msgIdentificacion = document.querySelector("#msgIdentificacion");
	let msgNombre = document.querySelector("#msgNombre");
	let msgDirrecion = document.querySelector("#msgDirrecion");
	let msgTelefono = document.querySelector("#msgTelefono");
	let msgCorreo = document.querySelector("#msgCorreo");
	let msgFechaingreso = document.querySelector("#msgFechaingreso");
	let msgCapacredito = document.querySelector("#msgCapacredito");
	let msgCategoria = document.querySelector("#msgCategoria");


	//Prevalidacion
	let esValidoCategoria = false;
	 for (let c of categoria) {
		 if (c.checked) {
			 esValidoCategoria = true;
			 break;
		 }
	 }


	//Condiciones
	//Tipo Identidad
	if (tpidentidad.selectedIndex == 0) {
		msgTpidentidad.innerHTML += '<b>Seleccione una Opción Valida</b><br>';
		validado = false;
	}

	//Identificacion
	if (identificacion.value.trim() == "" || identificacion.value.length == 0) {
		msgIdentificacion.innerHTML += '<b>La Identificación No Puede Estar Vacia</b><br>';
		validado = false;

	} else if (!rgxIdentidad.test(identificacion.value)) {
		msgIdentificacion.innerHTML += '<b>Formato Incorrecto Solo Números</b><br>';
		validado = false;
	}

	//Nombre
	if (nombre.value.trim() == "" || nombre.value.length == 0) {
		msgNombre.innerHTML += '<b>El Nombre No Puede Estar Vacia</b><br>';
		validado = false;
	} else if (!rgxNombre.test(nombre.value)) {
		msgNombre.innerHTML += '<b>Formato Incorrecto Solo Letras</b><br>';
		validado = false;
	}
	if (nombre.value.length < 4) {
		msgNombre.innerHTML += '<b>Mínimo 4 Caracteres</b><br>';
		validado = false;
	}


	//Direccion
	if (dirrecion.value.trim() == "" || dirrecion.value.length == 0) {
		msgDirrecion.innerHTML += '<b>La Dirección No Puede Estar Vacia</b><br>';
		validado = false;
	}

	//Telefono
	if (telefono.value.trim() == "" || telefono.value.length == 0) {
		msgTelefono.innerHTML += '<b>El Teléfono No Puede Estar Vacio</b><br>';
		validado = false;
	} else if (!rgxEntero.test(telefono.value)) {
		msgTelefono.innerHTML += '<b>Formato Incorrecto Introduzca Solo Números </b><br>';
		validado = false;
	}

	//Correo
	if (correo.value.trim() == "" || correo.value.length == 0) {
		msgCorreo.innerHTML += '<b>El Correo No Puede Estar Vacio</b><br>';
		validado = false;
	} else if (!rgxCorreo.test(correo.value)) {
		msgCorreo.innerHTML += '<b>Formato Incorrecto</b><br>';
		validado = false;
	}

	//Fecha de Ingreso
	if (fechaingreso.value.trim() == "" || fechaingreso.value.length == 0) {
		msgFechaingreso.innerHTML += '<b>La Fecha No Puede Estar Vacia</b><br>';
		validado = false;
	} else if (!rgxFecha.test(fechaingreso.value)) {
		msgFechaingreso.innerHTML += '<b>Formato Incorrecto (dd/mm/aaaa)</b><br>';
		validado = false;
	}

	//Capacidad de Credito
	if (capacredito.value.trim() == "" || capacredito.value.length == 0) {
		msgCapacredito.innerHTML += '<b>La Capacidad de Credito No Puede Estar Vacio</b><br>';
		validado = false;
	} else if (!rgxReal.test(capacredito.value)) {
		msgCapacredito.innerHTML += '<b>Formato Incorrecto Solo Números Reales</b><br>';
		validado = false;
	}

	//Categoria
	if(esValidoCategoria==false){
		msgCategoria.innerHTML += '<b>Debe Selecionar Una Opción </b><br>';
		validado = false;
	}

	return validado;
}

