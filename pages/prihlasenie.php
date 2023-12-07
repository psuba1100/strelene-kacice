<?php
require_once 'prihlaseniebcd.php';
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

    <title>Strelené kačice - prihlásenie</title>
</head>

<body>
    <form action="" method="post">
        <button class="btn btn-custom-primary btn-lg back" type="submit" name="back">⇐</button>
        <div class="container-flud">
            <div class="row mb-3">
                <div class="col mb-3 text-center">
                    <h3>Prihlásenie</h3>
                </div>
                <div class="col mb-3 text-center">
                    <h3>Registrácia</h3>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6 text-center"><input class="form-control" type="text" name="priMeno" placeholder="meno"></div>
                <div class="col-md-6 text-center"><input class="form-control" type="text" name="regMeno" placeholder="meno"></div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6 text-center"><input class="form-control" type="password" name="priHeslo" placeholder="heslo"></div>
                <div class="col-md-6 text-center"><input class="form-control" type="password" name="regHeslo" placeholder="heslo"></div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6  text-center"><button class="btn btn-custom-primary" name="prihlasit">prihlásiť</button></div>
                <div class="col-md-6  text-center"><button class="btn btn-custom-primary" name="registrovat">registrovať</button></div>
            </div>
            <div class="row">
            <?php
                if (isset($errmsg)) {
                    echo $errmsg;
                }
                if (isset($oznamenie)) {
                    echo $oznamenie;
                }
            ?>
            </div>
        </div>
    </form>
</body>

</html>