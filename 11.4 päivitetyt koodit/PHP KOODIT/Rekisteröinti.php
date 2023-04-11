<?php

// Yhdistä MySQL-tietokantaan
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login.sql";

$conn = new mysqli($servername, $username, $password, $dbname);

// Tarkista yhteyden tila
if ($conn->connect_error) {
  die("Yhteyden muodostaminen epäonnistui: " . $conn->connect_error);
}

// Hae tiedot POST-pyynnöstä
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Lisää tiedot MySQL-tietokantaan
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
  $last_id = $conn->insert_id;
  $response = array('status' => 'success', 'user_id' => $last_id);
  echo json_encode($response);
} else {
  echo "Virhe: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
