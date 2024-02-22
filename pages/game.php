<?php
require_once '../config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $jsonData = file_get_contents('php://input');
        $data = json_decode($jsonData, true);
        $dataToSend = $data['dataToSend'];
    
        echo json_encode($dataToSend); // Output received data to check if it's correct
    
        $sql = "INSERT INTO kartyhracov (IDHraca, Karty) VALUES (:IDHraca, :Karty)";
        $ID_hraca = '0'; // TODO - pouzit ID hraceho z prijatych dat
        $Karty = json_decode($dataToSend[0]); // Encode the array to JSON
        echo $Karty;
    
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":IDHraca", $ID_hraca, PDO::PARAM_STR);
            $stmt->bindParam(":Karty", $Karty, PDO::PARAM_STR);
            $stmt->execute();
            // Output success message
            echo "Data inserted successfully";
        } catch (PDOException $e) {
            // Output any errors that occur during the insertion process
            echo $e->getMessage();
            exit(); // Exit the script to prevent further execution
        }
    
        header('Content-Type: application/json');
        exit();
    }
    

    echo json_encode($dataToSend);

    header('Location: ../index.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="sk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.3/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="../resources/css/style.css">
    <link rel="stylesheet" href="../resources/css/customBootstrap.css">
    <link rel="stylesheet" href="../resources/css/gameStyle.css">
    <link rel="shortcut icon" href="../resources/images/favicon.png" type="image/x-icon">

    <title>Hra strelené kačice</title>
</head>

<body>
    <form action="" method="post">
        <button class="btn btn-custom-primary btn-lg back" type="submit">⇐</button>
    </form>

    <button class="btn btn-custom-primary btn-lg back" id="fullScreen">fs</button>

    <canvas id="hra"></canvas>
    <canvas id="karty"></canvas>

    <img src="../resources/images/obrazkyKariet/kacaciPochod.png" alt="" id="kacaciPochod">
    <img src="../resources/images/obrazkyKariet/kacaciTanec.png" alt="" id="kacaciTanec">
    <img src="../resources/images/obrazkyKariet/unik.png" alt="" id="unik">
    <img src="../resources/images/obrazkyKariet/vystrelit.png" alt="" id="vystrelit">
    <img src="../resources/images/obrazkyKariet/zivyStit.png" alt="" id="zivyStit">
    <img src="../resources/images/obrazkyKariet/Zamieriť.png" alt="" id="zamierit">

    <img src="../resources/images/pozadie/trava.jpg" alt="" id="trava">
    <img src="../resources/images/pozadie/voda.jpg" alt="" id="pozadieVoda">

    <img src="../resources/images/obrazkyKaciek/biela.png" alt="" id="biela">
    <img src="../resources/images/obrazkyKaciek/modra.png" alt="" id="modra">
    <img src="../resources/images/obrazkyKaciek/zelena.png" alt="" id="zelena">
    <img src="../resources/images/obrazkyKaciek/voda.png" alt="" id="voda">

    <div id="receivedDataDisplay"></div>

    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>

    <script src="../resources/js/main.js" type="module"></script>
</body>

</html>