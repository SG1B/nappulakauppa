<?php

require_once '../PHP/functions.php';
require_once '../PHP/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$category_id = $parameters[1];

try {
  $db = openDb();
  $sql = "select * from category where id = $category_id";
  $query = $db->query($sql);
  $category = $query->fetch(PDO::FETCH_ASSOC);

  $sql = "select * from tuote where category_id = $category_id";
  $query = $db->query($sql);
  $products = $query->fetchAll(PDO::FETCH_ASSOC);

  header('HTTP/1.1 200 OK');
  echo json_encode(array(
    "category" => $category['name'],
    "tuote" => $tuote
  ));
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}
