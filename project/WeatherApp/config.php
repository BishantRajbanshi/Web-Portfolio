<?php
$servername = "loclhost";
$username = "root";
$password = "";
$dbname = "weatherdata";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the database connection
if ($conn->connect_error) {
    header('HTTP/1.1 500 Internal Server Error');
    die('Database connection error: ' . $conn->connect_error);
}
?>