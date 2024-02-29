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



/*if ($_SERVER['REQUEST_METHOD'] === 'POST') {


$data = json_decode(file_get_contents('php://input'), true);

// Assuming IDHraca is 1 for now
$IDHraca = 1;
$karty = implode(',', $data['dataToSend']); // Convert array to comma-separated string

try {
    $stmt = $pdo->prepare("INSERT INTO `kartyhracov` (`IDHraca`, `Karty`) VALUES (:IDHraca, :Karty)");
    $stmt->bindParam(':IDHraca', $IDHraca);
    $stmt->bindParam(':Karty', $karty);
    $stmt->execute();
    echo json_encode(array("status" => "success"));
} catch (PDOException $e) {
    echo json_encode(array("status" => "error", "message" => $e->getMessage()));
}
exit();
}*/

    /*$ID_hraca = 0;
    $sql = "INSERT INTO `kartyhracov` (`IDHraca`) VALUES (:IDHraca)";
    try {
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":IDHraca", $ID_hraca, PDO::PARAM_STR);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e->getMessage();
    }*/

?>

<button class="btn btn-custom-primary btn-lg back" id="fullScreen">fs</button>
