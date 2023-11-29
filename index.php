<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Perform any necessary processing before redirection
    
    // Redirect to another page
    header('Location: pages/game.php');
    exit(); // Make sure that code below is not executed when we redirect
}
?>

<!DOCTYPE html>
<html lang="sk">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.3/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="resources/css/style.css">
    <link rel="stylesheet" href="resources/css/customBootstrap.css">
    <link rel="shortcut icon" href="resources/images/favicon.png" type="image/x-icon">
    
    <title>Strelené kačice</title>
</head>

<body>

    <div class="container-fluid">
        <div class="row mb-5">
            <h1 class="text-center display-1">strelené kačice</h1>
        </div>
        <div class="row justify-content-around mb-5">
            <div class="col-1"><div class="rounded-circle circle mx-auto"></div></div>
            <div class="col-1"><div class="rounded-circle circle mx-auto"></div></div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col text-center">
                <form action="" method="post">
                    <button class="btn btn-custom-primary btn-lg" type="submit">začať hru</button>
                </form>
            </div>
        </div>
        <div class="row mb-3 text-center">
            <div class="col text-center">
                <form action="pages/prihlasenie.php" method="post">
                    <button type="submit" class="btn btn-custom-secondary btn-sm">prihlásenie</button>
                </form>
            </div>
        </div>
    </div>






    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type=text/javascript src="https://cdn.datatables.net/1.13.3/js/jquery.dataTables.min.js"></script>
    <script type=text/javascript src="https://cdn.datatables.net/1.13.3/js/dataTables.bootstrap4.min.js"></script>
    <!-- <script src = "resources/script.js"></script> -->

</body>

</html>