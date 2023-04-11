<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

// lue parametri urlista

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),'PHP_URL_PATH');

//

$parameters = explode('/',$uri);

try{
    $db = openDb();
    $sql = "select * from product where name like '$phrase'";
    selectAsJson($db,$sql);
}
catch (PDOException $pdoex) {
    returnError($pdoex);
}