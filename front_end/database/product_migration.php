<?php

$sql = "CREATE TABLE Product (id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY, sku VARCHAR(10) UNIQUE, name VARCHAR(30) UNIQUE,
                            price INTEGER UNSIGNED, size VARCHAR(20) NULL, weight VARCHAR(10) NULL, dimensions VARCHAR(50) NULL)";

return $sql;
