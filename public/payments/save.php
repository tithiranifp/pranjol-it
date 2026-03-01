<?php
// payments/save.php — Receives payment data and appends to payments.txt
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Sanitize inputs
$date = date('Y-m-d H:i:s');
$tran_id = preg_replace('/[^A-Za-z0-9\-]/', '', $input['tran_id'] ?? 'N/A');
$name = preg_replace('/[|\n\r]/', '', substr($input['name'] ?? 'N/A', 0, 100));
$mobile = preg_replace('/[^0-9+]/', '', substr($input['mobile'] ?? 'N/A', 0, 15));
$batch_id = preg_replace('/[|\n\r]/', '', substr($input['batch_id'] ?? '', 0, 50));
$amount = floatval($input['amount'] ?? 0);
$method = preg_replace('/[^a-z]/', '', $input['method'] ?? 'unknown');
$status = preg_replace('/[^a-z]/', '', $input['status'] ?? 'unknown');

// Format: date | tran_id | name | mobile | batch_id | amount | method | status
$line = "$date | $tran_id | $name | $mobile | $batch_id | $amount | $method | $status\n";

$file = __DIR__ . '/payments.txt';
$result = file_put_contents($file, $line, FILE_APPEND | LOCK_EX);

if ($result === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Payment recorded']);
