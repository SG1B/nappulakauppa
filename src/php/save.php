<?php
require_once './functions.php';
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
$lname = filter_var($input->lastname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$address = filter_var($input->address, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$city = filter_var($input->city, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zip = filter_var($input->zip, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$cart = $input->cart;

try {
    $db = openDb();
    $db->beginTransaction();

    // lisätään asiakas

    $sql = "insert into customers (lastname, firstname, address, city, zip) values 
    ('" .
        filter_var($lname, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($fname, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($address, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($zip, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
        filter_var($city, FILTER_SANITIZE_FULL_SPECIAL_CHARS)
        . "')";

    $customer_id = executeInsert($db, $sql);

    // lisätään tilaus

    $sql = "insert into orders (customer_id) values (" . $customer_id . ")";
    $order_id = executeInsert($db, $sql);

    // lisätään tilausrivit looppaa ostoskorin sisältö

    foreach ($cart as $product) {
        $sql = "insert into order_row (order_id, product_id) values("
            .
            $order_id . "," .
            $product->id
            .   ")";
        executeInsert($db, $sql);
    }

    $db->commit(); // jos kaikki ok, niin tallennetaan tietokantaan

    // palautetaan 200 status ja customer id.
    header('HTTP/1.1 200 OK');
    $data = array('id' => $customer_id);
    echo json_encode($data);
} catch (PDOException $pdoex) {
    $db->rollback(); // jos jotain meni pieleen, niin kumotaan kaikki
    returnError($pdoex); // palautetaan virhe
}