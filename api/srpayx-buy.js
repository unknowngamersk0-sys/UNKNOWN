// pages/api/srpayx-buy.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const api_token = "67c12b2eb72a240ac9baf24fb1d654e3";
  const { customer_mobile, amount, planname } = req.body;
  const order_id = `GGDEMO_${Date.now()}`;
  const redirect_url = "https://unknown-gamer.vercel.app/api/srpayx-success"; // Vercel API route

  const data = {
    user_token: api_token,
    customer_mobile: customer_mobile || "9999999999",
    amount,
    order_id,
    redirect_url,
    remark1: planname,
    remark2: "",
  };

  const params = new URLSearchParams(data);

  const response = await fetch("https://srpayx.com/api/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  const result = await response.json();

  if (result && result.result && result.result.payment_url) {
    res.writeHead(302, { Location: result.result.payment_url });
    res.end();
  } else {
    res.status(400).json(result);
  }
}
