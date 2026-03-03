<?php
// payments/bkash-execute.php — Executes a bKash payment after user approval
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

// ===== CREDENTIALS (same as bkash-create.php) =====
$BKASH_USERNAME   = 'YOUR_BKASH_USERNAME';
$BKASH_PASSWORD   = 'YOUR_BKASH_PASSWORD';
$BKASH_APP_KEY    = 'YOUR_BKASH_APP_KEY';
$BKASH_APP_SECRET = 'YOUR_BKASH_APP_SECRET';
$BKASH_BASE_URL   = 'https://tokenized.pay.bka.sh/v1.2.0-beta';
// ===================================================

$input = json_decode(file_get_contents('php://input'), true);
$paymentID = $input['paymentID'] ?? '';

if (empty($paymentID)) {
    http_response_code(400);
    echo json_encode(['error' => 'paymentID is required']);
    exit;
}

// Step 1: Get token
$tokenRes = curlPost("$BKASH_BASE_URL/tokenized/checkout/token/grant", [
    'app_key'    => $BKASH_APP_KEY,
    'app_secret' => $BKASH_APP_SECRET,
], [
    'Content-Type: application/json',
    'Accept: application/json',
    "username: $BKASH_USERNAME",
    "password: $BKASH_PASSWORD",
]);

if (!isset($tokenRes['id_token'])) {
    http_response_code(500);
    echo json_encode(['error' => 'bKash token grant failed', 'details' => $tokenRes]);
    exit;
}

$token = $tokenRes['id_token'];

// Step 2: Execute payment
$execRes = curlPost("$BKASH_BASE_URL/tokenized/checkout/execute", [
    'paymentID' => $paymentID,
], [
    'Content-Type: application/json',
    'Accept: application/json',
    "Authorization: $token",
    "X-APP-Key: $BKASH_APP_KEY",
]);

echo json_encode($execRes);

// ---- Helper ----
function curlPost($url, $body, $headers) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_POSTFIELDS     => json_encode($body),
        CURLOPT_TIMEOUT        => 30,
    ]);
    $res = curl_exec($ch);
    if (curl_errno($ch)) {
        $err = curl_error($ch);
        curl_close($ch);
        return ['error' => "cURL error: $err"];
    }
    curl_close($ch);
    return json_decode($res, true) ?: ['error' => 'Invalid response', 'raw' => substr($res, 0, 300)];
}
