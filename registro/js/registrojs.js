function validar() {
	var nombres, apellidos, correo, contraseña, expresion;
	nombres = document.getElementById("nombres").value;
	apellidos = document.getElementById("apellidos").value;
	correo = document.getElementById("correo").value;
	contraseña = document.getElementById("contraseña").value;
	

	expresion = /\w+@\w+\.+[a-z]/;

	if (nombres === "" || apellidos === ""  || correo === "" || contraseña === "" ){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if (nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if (apellidos.length>80){
		alert("Los apellidos son muy largos");
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
