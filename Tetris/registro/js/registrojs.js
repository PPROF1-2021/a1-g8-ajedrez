function validar() {
	var nombre, apellido, correo, contraseña, expresion;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	contraseña = document.getElementById("contraseña").value;
	

	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === "" || apellido === ""  || correo === "" || contraseña === "" ){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if (nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if (apellido.length>80){
		alert("El apellido es muy largo");
		return false;
	}
	else if (correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if (!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	
	
	}
