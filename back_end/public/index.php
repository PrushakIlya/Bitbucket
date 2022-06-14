<?php
include_once '../vendor/autoload.php';

include_once '../routes/Web.php';

$db_connect = include_once '../config/connect_db.php';
$sql = include_once '../database/products_migration.php';

//do not forget create DATABASE scandiweb

try {
  $db_connect->exec($sql);
  echo "Table product has been created";
}
catch (PDOException $e) {
  
}

$web = new Web();
$web->route();





