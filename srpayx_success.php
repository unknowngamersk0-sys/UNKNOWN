<?php
$order_id = isset($_GET['order_id']) ? $_GET['order_id'] : "";
$api_token = "67c12b2eb72a240ac9baf24fb1d654e3";

$postData = array(
    "user_token" => $api_token,
    "order_id" => $order_id,
);

$ch = curl_init("https://srpayx.com/api/check-order-status");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
$response = curl_exec($ch);
curl_close($ch);
$responseData = json_decode($response, true);

if ($responseData && $responseData["status"] === "COMPLETED") {
    // Success: Popup with ID/PASS (change XX with actual id/pass logic as per your DB)
    $gg_id = "XX";
    $gg_pass = "XX";
    echo "<script>
    alert('Payment Success 👙\\nYOUR GG MOUSE PRO ID AND PASS\\nID: $gg_id\\nPASS: $gg_pass\\nJoin your group: https://chat.whatsapp.com/E9LqLVvdrDM0Ioj8lie2OR?mode=ems_copy_t');
    window.location.href='index.php';
    </script>";
} else {
    echo "<h2>Payment Failed</h2>";
    $errorMessage = isset($responseData["message"]) ? $responseData["message"] : "Error";
    echo "API Error: $errorMessage";
}
?>
