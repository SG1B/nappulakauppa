<?php
// connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lautapelit";

$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// select data from the table
$sql = "SELECT * FROM yourtable LIMIT 1";
$result = $conn->query($sql);

// send the data as JSON
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "0 results";
}

$conn->close();
?>