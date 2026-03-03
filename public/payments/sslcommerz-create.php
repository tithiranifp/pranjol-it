<?php
// payments/sslcommerz-create.php — Creates an SSLCommerz payment session
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

// ===== CREDENTIALS =====
$STORE_ID       = 'YOUR_SSLCOMMERZ_STORE_ID';
$STORE_PASSWORD = 'YOUR_SSLCOMMERZ_STORE_PASSWORD';
$BASE_URL       = 'https://securepay.sslcommerz.com'; // Use https://sandbox.sslcommerz.com for testing
// ========================

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$amount  = floatval($input['amount'] ?? 0);
$name    = $input['name'] ?? 'Customer';
$mobile  = $input['mobile'] ?? '01XXXXXXXXX';
$batchId = $input['batchId'] ?? '';

if ($amount <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Amount must be greater than 0']);
    exit;
}

$tranId = 'PRANJOL-' . round(microtime(true) * 1000);

$params = [
    'store_id'         => $STORE_ID,
    'store_passwd'     => $STORE_PASSWORD,
    'total_amount'     => $amount,
    'currency'         => 'BDT',
    'tran_id'          => $tranId,
    'success_url'      => "https://pranjolit.com/payment?status=success&tran_id=$tranId&amount=$amount&method=sslcommerz&name=" . urlencode($name) . "&mobile=" . urlencode($mobile) . "&batch_id=" . urlencode($batchId),
    'fail_url'         => "https://pranjolit.com/payment?status=fail&tran_id=$tranId&amount=$amount&method=sslcommerz",
    'cancel_url'       => "https://pranjolit.com/payment?status=cancel&tran_id=$tranId&amount=$amount&method=sslcommerz",
    'cus_name'         => $name,
    'cus_email'        => 'customer@pranjolit.com',
    'cus_phone'        => $mobile,
    'cus_add1'         => 'Dhaka',
    'cus_city'         => 'Dhaka',
    'cus_country'      => 'Bangladesh',
    'shipping_method'  => 'NO',
    'product_name'     => "Pranjol IT - Batch $batchId",
    'product_category' => 'Education',
    'product_profile'  => 'non-physical-goods',
    'value_a'          => $name,
    'value_b'          => $mobile,
    'value_c'          => $batchId,
];

$ch = curl_init("$BASE_URL/gwprocess/v4/api.php");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => http_build_query($params),
    CURLOPT_HTTPHEADER     => ['Content-Type: application/x-www-form-urlencoded'],
    CURLOPT_TIMEOUT        => 30,
]);

$res = curl_exec($ch);
if (curl_errno($ch)) {
    $err = curl_error($ch);
    curl_close($ch);
    http_response_code(500);
    echo json_encode(['error' => "cURL error: $err"]);
    exit;
}
curl_close($ch);

$data = json_decode($res, true);

if ($data && isset($data['status']) && $data['status'] === 'SUCCESS' && !empty($data['GatewayPageURL'])) {
    echo json_encode(['url' => $data['GatewayPageURL'], 'tranId' => $tranId]);
} else {
    http_response_code(400);
    echo json_encode([
        'error' => $data['failedreason'] ?? 'SSLCommerz session failed',
        'data'  => $data,
    ]);
}
