<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Perform search and return results as JSON response
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  if (isset($_GET['q'])) {
    $query = $_GET['q'];
    // Perform your search logic here and store the results in $searchResults variable
    $searchResults = performSearch($query);
    echo json_encode($searchResults);
    exit;
  } else {
    echo json_encode(['error' => 'Missing search query parameter']);
    exit;
  }
} else {
  echo json_encode(['error' => 'Invalid request method']);
  exit;
}

function performSearch($query) {
  // Implement your search logic here and return the results as an array of objects
  // Example:
  $results = [
    ['id' => 1, 'name' => 'Product 1', 'price' => 10.99],
    ['id' => 2, 'name' => 'Product 2', 'price' => 20.99],
    ['id' => 3, 'name' => 'Product 3', 'price' => 30.99],
  ];
  return $results;
}
?>