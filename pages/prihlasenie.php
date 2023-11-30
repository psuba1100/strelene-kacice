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
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.3/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="../resources/css/style.css">
    <link rel="stylesheet" href="../resources/css/customBootstrap.css">
    <link rel="shortcut icon" href="../resources/images/favicon.png" type="image/x-icon">

    <title>Hra strelené kačice</title>
</head>

<body>
    <form action="" method="post">
        <button class="btn btn-custom-primary btn-lg back" type="submit">⇐</button>
    </form>
    <div class="container-flud">
        <div class="row">
            <div class="col mb-3"><h3>Prihlásenie</h3></div>
            <div class="col mb-3"><h3>Registrácia</h3></div>
        </div>
        <div class="row">
            <div class="col mb-3"><input type="text" name="" id="" placeholder="meno"></div>
            <div class="col mb-3"><input type="text" name="" id="" placeholder="meno"></div>
        </div>
        <div class="row">
            <div class="col mb-3"><input type="password" name="" id="" placeholder="heslo"></div>
            <div class="col mb-3"><input type="password" name="" id="" placeholder="heslo"></div>
        </div>
        <div class="row">
            <div class="col"><button class="btn btn-custom-primary">prihlásiť</button></div>
            <div class="col"><button class="btn btn-custom-primary">registrovať</button></div>
        </div>
    </div>
    <form action=""></form>
</body>

</html>