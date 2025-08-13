<?php
// Replace these with your MySQL database credentials
$host = 'localhst';
$username = 'root';
$password = '';
$database = 'weatherdata';

// Create a new PDO instance
$pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);

// Function to fetch weather data from the MySQL database and serve as JSON
function getWeatherData($city) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM weather_data WHERE city = ?");
    $stmt->execute([$city]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return json_encode($result);
}

// Sample city for testing
$cityToRetrieve = 'Aurangabad';

// Retrieve weather data and serve as JSON
echo getWeatherData($cityToRetrieve);
?>
