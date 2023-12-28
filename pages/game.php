<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Perform any necessary processing before redirection
    
    // Redirect to another page
    header('Location: ../index.php');
    exit(); // Make sure that code below is not executed when we redirect
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
    <img src="../resources/images/obrazkyKariet/Zamieriť.png" alt="" id="zamierit">

    <img src="../resources/images/pozadie/trava.jpg" alt="" id="trava">
    <img src="../resources/images/pozadie/voda.jpg" alt="" id="voda">

    <script src="../resources/js/main.js" type="module"></script>
</body>
</html>