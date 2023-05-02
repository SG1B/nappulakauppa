/*

<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'), PHP_URL_PATH);
$parameters = explode('/', $uri);
$category_id = filter_var($parameters[1], FILTER_VALIDATE_INT);

if ($category_id === false) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(array('message' => 'Invalid category ID'));
    exit();
}

try {
    $db = openDB();

    $category_sql = "SELECT * FROM category WHERE id = :category_id";
    $category_query = $db->prepare($category_sql);
    $category_query->bindValue(':category_id', $category_id, PDO::PARAM_INT);
    $category_query->execute();
    $category = $category_query->fetch(PDO::FETCH_ASSOC);

    $products_sql = "SELECT * FROM product WHERE category_id = :category_id";
    $products_query = $db->prepare($products_sql);
    $products_query->bindValue(':category_id', $category_id, PDO::PARAM_INT);
    $products_query->execute();
    $products = $products_query->fetchAll(PDO::FETCH_ASSOC);

    header('HTTP/1.1 200 OK');
    echo json_encode(array(
        "category" => $category['name'],
        "products" => $products
    ));
} catch (PDOException $pdoex) {
    returnError($pdoex);
}