<?php
header('Content-Type: application/json; charset=utf-8');

$city = strtolower(trim($_GET['city'] ?? 'amsterdam'));
$locations = [
    'amsterdam' => [
        'name' => 'Amsterdam',
        'latitude' => 52.3676,
        'longitude' => 4.9041,
    ],
];

if (!isset($locations[$city])) {
    http_response_code(400);
    echo json_encode(["error" => "Unsupported city. Try 'amsterdam'."]);
    exit;
}

$location = $locations[$city];
$apiUrl = sprintf(
    'https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%%2FAmsterdam',
    $location['latitude'],
    $location['longitude']
);

function fetchJson(string $url): ?array
{
    $options = [
        'http' => [
            'method' => 'GET',
            'header' => "User-Agent: PHP-weather-proxy/1.0\r\n",
            'timeout' => 10,
        ],
    ];

    $context = stream_context_create($options);
    $result = @file_get_contents($url, false, $context);

    if ($result === false) {
        return null;
    }

    return json_decode($result, true);
}

$source = fetchJson($apiUrl);

if ($source === null || !isset($source['current_weather'], $source['daily'])) {
    http_response_code(502);
    echo json_encode(["error" => "Unable to fetch weather data."]);
    exit;
}

$response = [
    'locationName' => $location['name'],
    'current' => [
        'time' => $source['current_weather']['time'] ?? null,
        'temperatureCelsius' => $source['current_weather']['temperature'] ?? null,
        'humidityPercent' => $source['current_weather']['relativehumidity'] ?? null,
        'windSpeedKmH' => $source['current_weather']['windspeed'] ?? null,
        'weatherCode' => $source['current_weather']['weathercode'] ?? null,
    ],
    'forecast' => [],
];

foreach ($source['daily']['time'] as $index => $forecastDate) {
    $response['forecast'][] = [
        'date' => $forecastDate,
        'maxTemperatureCelsius' => $source['daily']['temperature_2m_max'][$index] ?? null,
        'minTemperatureCelsius' => $source['daily']['temperature_2m_min'][$index] ?? null,
        'weatherCode' => $source['daily']['weathercode'][$index] ?? null,
    ];
}

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
