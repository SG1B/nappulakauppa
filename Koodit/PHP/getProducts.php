<?php
require_once '../PHP/functions.php';
require_once '../PHP/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$Tuotenimi = $parameters[0];

try {
  $db = openDb();
  selectRowAsJson($db,"select * from product");
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}