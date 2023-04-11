<?php
require_once '../PHP/functions.php';
require_once '../PHP/headers.php';

try {
  $db = openDb();
  selectAsJson($db,'select * from category');
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}