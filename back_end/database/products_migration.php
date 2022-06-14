<?php

$sql = "CREATE TABLE products (id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY, sku VARCHAR(10) UNIQUE NOT NULL, name VARCHAR(30) UNIQUE NOT NULL,
                            price INTEGER UNSIGNED NOT NULL, size VARCHAR(20), weight VARCHAR(10), dimensions VARCHAR(50))";

return $sql;
