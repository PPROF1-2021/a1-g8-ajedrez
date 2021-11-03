<?php

    $conexion = mysqli_connect('10.0.10.28', 'fsksvgmt_uspractica', 'Practica2021', 'fsksvgmt_practica') or die(mysql_error($mysqli));

    insertar($conexion);

    function insertar($conexion){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $correo = $_POST['correo'];
        $contraseña = $_POST['contraseña'];

        $consulta = "INSERT INTO usuario(nombre, apellido, correo, contraseña')
        VALUES ('$nombre', '$apellido', '$correo', '$contraseña')";
        mysqli_query($conexion, $consulta);
        mysqli_close($conexion);
    }
?>