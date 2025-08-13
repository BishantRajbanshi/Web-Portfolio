<?php
// Replace these with your MySQL database credentials
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'weatherdata';

// OpenWeatherMap API Key
$apiKey = 'c55f438e699a31156c728056b77cea2a';

// Create a new PDO instance
$pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData($city) {
    global $apiKey;
    $apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric";
    $json = file_get_contents($apiUrl);
    echo "$json";
    return json_decode($json, true);
}

// Function to insert weather data into the MySQL database
function insertWeatherData($city, $data) {
    global $pdo;
        // Extract date from the JSON data
        $date = date('Y-m-d H:i:s');
    $stmt = $pdo->prepare("INSERT INTO weather_data (city, temperature, description, humidity, wind_speed, pressure ,date) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([$city, $data['main']['temp'], $data['weather'][0]['description'], $data['main']['humidity'], $data['wind']['speed'], $data['main']['pressure'], $date]);
}

// Sample city for testing
$cityToFetch = 'Biratnagar';

// Fetch weather data and insert into database
$weatherData = fetchWeatherData($cityToFetch);
if ($weatherData) {
    insertWeatherData($cityToFetch, $weatherData);
    echo 'Weather data successfully inserted into the database.';
} else {
    echo 'Failed to fetch weather data.';
}
?>
