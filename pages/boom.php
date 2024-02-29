<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);
$dataToSend = $data['dataToSend'];

header('Content-Type: application/json');
echo json_encode($dataToSend);
exit();
}

echo json_encode($dataToSend);
$sql = "INSERT INTO kartyhracov (IDHraca, Karty) VALUES (:IDHraca, :Karty)";
$ID_hraca = '0'; // TODO - pouzit ID hraceho z prijatych dat
$Karty = $data;

try {
$stmt = $pdo->prepare($sql);
$stmt->bindParam(":IDHraca", $ID_hraca, PDO::PARAM_STR);
$stmt->bindParam(":Karty", $Karty, PDO::PARAM_STR);
$stmt->execute();
} catch (PDOException $e) {
$e->getMessage();
}

//else {
    header('Location: ../index.php');
    exit();
//}
?>

<button class="btn btn-custom-primary btn-lg back" id="fullScreen">fs</button>