<?php

$servername = "mysli.oamk.fi";
$username = "c2pima00";
$password = "ufWmZTMqw2qXGuEY";
$dbname = "opisk_c2pima00";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $sql = "INSERT INTO register (name, email, password) VALUES ('$name', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        $response = array("status" => "success", "message" => "Registration successful");
        echo json_encode($response);
    } else {
        $response = array("status" => "error", "message" => "Error: " . $sql . "<br>" . mysqli_error($conn));
        echo json_encode($response);
    }
}

mysqli_close($conn);
