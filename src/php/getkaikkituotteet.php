<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$kategoria_id = $parameters[1];

try {
  $db = openDb();
  $sql = "select * from kategoria where id = $kategoria_id";
  $query = $db->query($sql);
  $category = $query->fetch(PDO::FETCH_ASSOC);

  $sql = "select * from tuote where kategoria_id = $kategoria_id";
  $query = $db->query($sql);
  $products = $query->fetchAll(PDO::FETCH_ASSOC);

  header('HTTP/1.1 200 OK');
  echo json_encode(array(
    "kategoria" => $kategoria['name'],
    "tuote" => $tuote
  ));
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}