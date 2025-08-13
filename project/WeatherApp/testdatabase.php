<?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "weatherdata";

// $conn = new mysqli($servername, $username, $password, $dbname);

// // Check the database connection
// if ($conn->connect_error) {
//     header('HTTP/1.1 500 Internal Server Error');
//     die('Database connection error: ' . $conn->connect_error);
// }

// $sql_fetch = "SELECT * FROM WeatherData";
// $result_fetch = $conn->query($sql_fetch);

// $data_array = array();

// if ($result_fetch) {
//     // Add each row to the data array
//     while ($row = $result_fetch->fetch_assoc()) {
//         $data_array[] = array(
//             'DateRecorded' => $row["DateRecorded"],
//             'Temperature' => $row["Temperature"],
//             'Humidity' => $row["Humidity"],
//             'WindSpeed' => $row["WindSpeed"]
//         );
//     }

//     // Check if there are records in $data_array
//     if (!empty($data_array)) {
//         // Access and print the temperature from the first record
//         echo 'Temperature: ' . $data_array[0]['Temperature'];
//     } else {
//         echo 'No records found.';
//     }

//     // Convert the data array to JSON
//     $json_data = json_encode($data_array);

//     if ($json_data !== false) {
//         // Output the JSON data
//         header('Content-Type: application/json');
//         echo $json_data;
//     } else {
//         header('HTTP/1.1 500 Internal Server Error');
//         echo json_encode(array('message' => 'Error encoding JSON'));
//     }
// } else {
//     header('HTTP/1.1 500 Internal Server Error');
//     echo json_encode(array('message' => 'Error executing SQL query'));
// }

// $conn->close();
?>
