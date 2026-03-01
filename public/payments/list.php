<?php
// payments/list.php — Reads payments.txt and returns as JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$file = __DIR__ . '/payments.txt';

if (!file_exists($file)) {
    echo json_encode(['payments' => []]);
    exit;
}

$lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$payments = [];

foreach (array_reverse($lines) as $line) {
    $parts = array_map('trim', explode('|', $line));
    if (count($parts) >= 8) {
        $payments[] = [
            'date' => $parts[0],
            'tran_id' => $parts[1],
            'name' => $parts[2],
            'mobile' => $parts[3],
            'batch_id' => $parts[4],
            'amount' => floatval($parts[5]),
            'method' => $parts[6],
            'status' => $parts[7],
        ];
    }
}

echo json_encode(['payments' => $payments]);
