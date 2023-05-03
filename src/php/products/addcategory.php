<?php
require_once './functions';
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Accept, Content-Type, Access-Control-Allow-Header');
header('Content-Type: application/json');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Expose-Headers: Content-Length, X-JSON');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  
  exit(0);
}
$input = json_decode(file_get_contents('php://input'));
$name = filter_var($input->name,FILTER_SANITIZE_FULL_SPECIAL_CHARS);

try {
    $db = openDb();
    $sql = "insert into category (name) values ('$name')";
    executeInsert($db,$sql);
    $data = array('id' => $db->lastInsertId(), 'name' => $name);
    print json_encode($data);
}
catch (PDOException $pdoex) {
    returnError($pdoex);
}