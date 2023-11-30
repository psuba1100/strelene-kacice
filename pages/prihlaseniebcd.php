<?php
require_once '../config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function menoExistuje($db, $login)
{
    $sql = "SELECT id FROM používatelia WHERE Login = :login";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(":login", $login, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->rowCount() == 1;
}

function kontrolaNenulovejHodnoty($field)
{
    return empty(trim($field));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errmsg = "";
    $oznamenie = "";

    if (isset($_POST['back'])) {
        header('Location: ../index.php');
        exit();
    } elseif (isset($_POST['registrovat'])) {
        if (kontrolaNenulovejHodnoty($_POST['regMeno'])) {
            $errmsg .= '<div class="alert alert-danger" role="alert">Políčko "meno" nemôže byť prázdne.</div>';
        } elseif (kontrolaNenulovejHodnoty($_POST['regHeslo'])) {
            $errmsg .= '<div class="alert alert-danger" role="alert">Políčko "heslo" nemôže byť prázdne.</div>';
        }
        if (menoExistuje($pdo, $_POST['regMeno'])) {
            $errmsg .= '<div class="alert alert-danger" role="alert">Používateľské meno už existuje.</div>';
        }
        if (empty($errmsg)) {
            $sql = "INSERT INTO používatelia (Login, Heslo) VALUES (:Login, :Heslo)";
            $login = $_POST['regMeno'];
            $hashed_password = password_hash($_POST['regHeslo'], PASSWORD_ARGON2ID);

            try {
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(":Login", $login, PDO::PARAM_STR);
                $stmt->bindParam(":Heslo", $hashed_password, PDO::PARAM_STR);
                $stmt->execute();
                $oznamenie = '<div class="alert alert-success">Registrácia bola úspešná.</div>';
            } catch (PDOException $e) {
                $e->getMessage();
            }
        } else {
            $errmsg;
        }
        //exit();
    } elseif (isset($_POST['prihlasit'])) {
        $sql = "SELECT Login, Heslo FROM používatelia WHERE Login = :login";
        $stmt = $pdo->prepare($sql);
        $login = $_POST['priMeno'];
        $stmt->bindParam(':login', $login, PDO::PARAM_STR);

        if ($stmt->execute()) {
            if ($stmt->rowCount() == 1) {
                $row = $stmt->fetch();
                $hashed_password = $row["Heslo"];
                if (!password_verify($_POST['priHeslo'], $hashed_password)) {
                    $errmsg .= '<div class="alert alert-danger" role="alert">Zadané heslo je nesprávne.</div>';
                } else {
                    header('Location: game.php');
                    exit();
                }
            } else {
                $errmsg .= '<div class="alert alert-danger" role="alert">Používateľ neexistuje.</div>';
            }
        } else {
            $errmsg .= '<div class="alert alert-danger" role="alert">Neočakávaná chyba.</div>';
        }
    }
}

unset($stmt);
unset($pdo);