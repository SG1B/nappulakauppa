<?php
/*
require_once '../Testailua%20basic/index.php';
require_once '../Testailua%20basic/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$category_id = $parameters[1];

try {
    $db = openDB();
    $sql = "select * from category where id = $category_id";
    $query = $db->query($sql);
    $category = $query->fetch(PDO::FETCH_ASSOC);

    $sql = "select * from category where category_id = $category_id";
    $query = $db->query($sql);
    $category = $query->fetchAll(PDO::FETCH_ASSOC);

    header('HTTP/1.1 200 OK');
    echo json_encode(array(
        "category" => $category['name'],
        "products" => $products
    ));
}

catch (PDOException $pdoex) {
    returnError($pdoex);
}*/