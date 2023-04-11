<?php
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Accept, Content-Type, Access-Control-Allow-Header');
header('Content-Type: application/json');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Expose-Headers: Content-Length, X-JSON');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  
  exit(0);
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Lautapelit";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    // OLEMASSA OLEVAAN DATABASEEN PITÄÄ TEHDÄ TAULU NIMELTÄ REGISTER JOSSA SARAKKEET name , email ja password!!!!
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
