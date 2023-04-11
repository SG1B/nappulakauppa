<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$Tuotenimi = $parameters[0];

try {
  $db = openDb();
  selectRowAsJson($db,"select * from tuote");
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}