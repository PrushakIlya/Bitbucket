<?php


namespace Prushak\Scandiweb\HTTP\Controller;

use PDO;

use function PHPSTORM_META\type;

class FrontController extends BaseController
{
  private $conn;

  public function __construct()
  {
    $this->conn = include '../config/connect_db.php';
  }

  public function index()
  {
    $sql = "SELECT * FROM Product";
    $statment = $this->conn->query($sql);
    $results = $statment->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($results);
    return $json;
  }

  public function store()
  {
    $data = json_decode(file_get_contents('php://input'), true);
    $dimensions = '';
    !array_key_exists('size', $data) && $data['size'] = null;
    !array_key_exists('weight', $data) && $data['weight'] = null;
    !array_key_exists('height', $data) ? $dimensions = null : $dimensions = (string)$data['height'] . 'x' . (string)$data['width'] . 'x' . (string)$data['length'];

    $sql = "INSERT INTO Product (sku,name,price,size,weight,dimensions)
      VALUES (:sku,:name,:price,:size,:weight,:dimensions)";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute([
      ':sku' => $data['sku'], ':name' => $data['name'], ':price' => $data['price'],
      ':size' => $data['size'], ':weight' => $data['weight'], ':dimensions' => $dimensions,
    ]);
  }

  public function check_dublicate($value)
  {
    $error = false;
    $sql = "SELECT sku,name FROM Product";
    $statment = $this->conn->query($sql);
    $results = $statment->fetchAll(PDO::FETCH_ASSOC);
    $value = explode('_', $value);
    $input = array_pop($value);
    $value = array_pop($value);
    foreach ($results as $item) {
      if ($item[$value] === $input) $error = true;
    }
    return json_encode($error);
  }

  public function destroy()
  {
    $data = json_decode(file_get_contents('php://input'), true);
    foreach ($data as $id) {
      $sql = "DELETE FROM Product WHERE id = $id";
      $this->conn->exec($sql);
    }
  }
}
