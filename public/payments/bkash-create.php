<?php
// payments/bkash-create.php — Creates a bKash tokenized payment session
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

// ===== CREDENTIALS (update these with your live keys) =====
$BKASH_USERNAME   = 'YOUR_BKASH_USERNAME';
$BKASH_PASSWORD   = 'YOUR_BKASH_PASSWORD';
$BKASH_APP_KEY    = 'YOUR_BKASH_APP_KEY';
$BKASH_APP_SECRET = 'YOUR_BKASH_APP_SECRET';
$BKASH_BASE_URL   = 'https://tokenized.pay.bka.sh/v1.2.0-beta';
// ==========================================================

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$amount       = floatval($input['amount'] ?? 0);
$callbackURL  = $input['callbackURL'] ?? '';
$payerRef     = $input['payerReference'] ?? $input['mobile'] ?? '01XXXXXXXXX';

if ($amount <= 0 || empty($callbackURL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Amount and callbackURL are required']);
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
$invoiceNumber = 'PRANJOL-' . round(microtime(true) * 1000);

// Step 2: Create payment
$createRes = curlPost("$BKASH_BASE_URL/tokenized/checkout/create", [
    'mode'                   => '0011',
    'payerReference'         => $payerRef,
    'callbackURL'            => $callbackURL,
    'amount'                 => strval($amount),
    'currency'               => 'BDT',
    'intent'                 => 'sale',
    'merchantInvoiceNumber'  => $invoiceNumber,
], [
    'Content-Type: application/json',
    'Accept: application/json',
    "Authorization: $token",
    "X-APP-Key: $BKASH_APP_KEY",
]);

echo json_encode($createRes);

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
