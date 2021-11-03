<?php
include 'conexion.php';
//Recibir los datos y almacenarlos en variables
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$contraseña = $_POST["contraseña"];

//Consulta para insertar
$insertar = "INSERT INTO tb_usuarios(nombre, apellido, correo, contraseña) VALUES ('$nombre', '$apellido', '$correo', '$contraseña')";
//Ejecutar consulta
$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
	echo 'Error al registrarse';
}else{
	echo 'Usuario registrado exitosamente';
}
//Cerrrar conexion
mysqli_close($conexion);