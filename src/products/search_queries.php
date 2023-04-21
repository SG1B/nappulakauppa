<?php
$host = 'localhost';
$dbname = 'lautapelit';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("SELECT query FROM search_queries");
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($results);

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>