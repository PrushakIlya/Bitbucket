<?php
$db = include '../config/db.php';

try {
  return new PDO(
    "mysql:host={$db['host']};port={$db['port']};dbname={$db['dbname']}",
    $db['username'],
    $db['password']
  );
} catch (PDOException $e) {
  echo 'Create db by named: scandiweb';
}
