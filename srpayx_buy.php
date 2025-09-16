<?php
// Your SRPayX API Token
$api_token = "67c12b2eb72a240ac9baf24fb1d654e3";

// Input from user
$customer_mobile = $_POST['customer_mobile'];
$amount = $_POST['amount'];
$planname = $_POST['planname'];
$order_id = uniqid("GGDEMO_");
$redirect_url = "https://yourdomain.com/srpayx_success.php";

$data = array(
    "user_token" => $api_token,
    "customer_mobile" => $customer_mobile,
    "amount" => $amount,
    "order_id" => $order_id,
    "redirect_url" => $redirect_url,
    "remark1" => $planname,
    "remark2" => "",
);

$ch = curl_init('https://srpayx.com/api/create-order');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
$response = curl_exec($ch);
curl_close($ch);
$result = json_decode($response, true);

if ($result && isset($result['result']['payment_url'])) {
    $paymentUrl = $result['result']['payment_url'];
    header('Location: '.$paymentUrl);
    exit;
} else {
    echo "<h2>Payment Error</h2>";
    if ($result) {
        echo "Status: ".htmlentities($result['status'])."<br>";
        echo "Message: ".htmlentities($result['message']);
    } else {
        echo "Invalid API response";
    }
}
?>
