<?php
$hostname = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "strelené kačky";

$pdo = new PDO("mysql:host=$hostname;port=3306;dbname=$dbname", $username, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>