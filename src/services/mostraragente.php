<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST,DELETE");
header("Allow: GET,POST,DELETE");

// Paso 1: Conexión a la base de datos
$conn = mysqli_connect("localhost", "root", "", "seguros") or die("Error con la conexion");

if ($_SERVER["REQUEST_METHOD"] === "GET") {

    // Paso 2: Crear la consulta SQL
    $sql = "SELECT p.dni, p.nombre, p.apellido, p.telefono FROM personas p 
          INNER JOIN agente a ON p.dni = a.Personas_dni";


    // Paso 3: Ejecutar la consulta y guardar los resultados en un array de objetos
    $resultados = mysqli_query($conn, $sql);
    $agentes = array();
    while ($fila = mysqli_fetch_assoc($resultados)) {
        $agentes[] = $fila;
    }

    // Paso 4: Devolver los datos en formato JSON
    header('Content-Type: application/json');
    echo json_encode($agentes);
     
}

mysqli_close($conn);
