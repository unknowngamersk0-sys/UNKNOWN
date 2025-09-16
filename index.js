// File: /pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div>
      <head>
        <title>GG Mouse Pro 2 - Buy Premium</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          :root {
              --pink: #ff00cc;
              --neon: #ff00cc; 
              --highlight: #ff4d6d;
          }
          body {
              background: #0e0e0e;
              font-family: 'Poppins', sans-serif;
              color: white;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 2rem;
              gap: 2rem;
          }
          img.logo {
              width: 120px;
              height: auto;
          }
          h1 {
              text-align: center;
              color: #fff;
          }
          .card-container {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
              justify-content: center;
          }
          .stat-outer {
              width: 300px;
              min-height: 250px;
              border-radius: 10px;
              padding: 1px;
              background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
              position: relative;
              opacity: 0;
              transform: translateY(30px);
              animation: fadeInUp 1s ease forwards;
          }
          .stat-outer:nth-child(1) { animation-delay: 0.2s; }
          .stat-outer:nth-child(2) { animation-delay: 0.4s; }
          .stat-outer:nth-child(3) { animation-delay: 0.6s; }
          .stat-outer:nth-child(4) { animation-delay: 0.8s; }
          .stat-outer:nth-child(5) { animation-delay: 1s; }
          @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
          }
          .dot {
              width: 5px;
              height: 5px;
              position: absolute;
              background: #fff;
              box-shadow: 0 0 10px #ffffff;
              border-radius: 50%;
              z-index: 2;
              right: 10%;
              top: 10%;
              animation: moveDot 6s linear infinite;
          }
          @keyframes moveDot {
              0%, 100% { top: 10%; right: 10%; }
              25% { top: 10%; right: calc(100% - 35px); }
              50% { top: calc(100% - 30px); right: calc(100% - 35px); }
              75% { top: calc(100% - 30px); right: 10%; }
          }
          .card {
              z-index: 1;
              width: 100%;
              height: 100%;
              border-radius: 9px;
              border: solid 1px #202222;
              background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: #fff;
              position: relative;
              overflow: hidden;
              padding: 20px;
              box-sizing: border-box;
              text-align: center;
          }
          .buy-btn {
              background: linear-gradient(135deg, #222 40%, #111 100%);
              color: #fff;
              font-weight: bold;
              border: none;
              padding: 12px 28px;
              border-radius: 30px;
              box-shadow: 0 0 12px var(--neon), 0 0 30px #222 inset;
              font-family: 'Poppins', sans-serif;
              font-size: 16px;
              display: inline-block;
              margin-top: 10px;
              cursor: pointer;
              transition: 0.2s;
              letter-spacing: .5px;
          }
          .buy-btn:hover {
              transform: scale(1.07);
              box-shadow: 0 0 24px var(--neon), 0 0 40px var(--neon), 0 0 50px #111 inset;
          }
          .inputmob {
              width: 90%;
              margin: 10px auto 0 auto;
              padding: 8px 12px;
              border-radius: 8px;
              border: none;
              font-size: 15px;
          }
          .highlight {
              box-shadow: 0 0 25px var(--highlight), inset 0 0 25px #111;
              position: relative;
          }
          .tag {
              position: absolute;
              top: 15px;
              right: -25px;
              background: var(--highlight);
              color: #fff;
              font-weight: bold;
              padding: 6px 18px;
              font-size: 13px;
              transform: rotate(45deg);
              box-shadow: 0 0 12px var(--highlight);
          }
          .desc {
              font-size: 13px;
              color: #ddd;
              margin-top: 6px;
              line-height: 1.4;
          }
        `}</style>
      </head>
      <body>
        <img className="logo" src="https://images.sftcdn.net/images/t_app-icon-m/p/747a2064-cda2-444a-bc08-979f110b7d83/2937830182/gg-mouse-pro-logo" alt="GG Mouse Pro Logo"/>
        <h1>GG Mouse Pro 2</h1>

        <div className="card-container">
          {/* 1 Month Premium */}
          <div className="stat-outer">
            <div className="dot"></div>
            <div className="card">
              <h2>1 Month Premium</h2>
              <p>₹10 Only</p>
              <form action="/api/srpayx-buy" method="post">
                <input type="hidden" name="customer_mobile" value="9999999999" />
                <input type="hidden" name="amount" value="10" />
                <input type="hidden" name="planname" value="1 Month Premium" />
                <button type="submit" className="buy-btn">Pay ₹10 & Buy</button>
              </form>
            </div>
          </div>

          {/* 3 Months Premium */}
          <div className="stat-outer">
            <div className="dot"></div>
            <div className="card">
              <h2>3 Months Premium</h2>
              <p>₹30 Only</p>
              <form action="/api/srpayx-buy" method="post">
                <input type="hidden" name="customer_mobile" value="9999999999" />
                <input type="hidden" name="amount" value="30" />
                <input type="hidden" name="planname" value="3 Months Premium" />
                <button type="submit" className="buy-btn">Pay ₹30 & Buy</button>
              </form>
            </div>
          </div>

          {/* 6 Months Premium */}
          <div className="stat-outer">
            <div className="dot"></div>
            <div className="card">
              <h2>6 Months Premium</h2>
              <p>₹60 Only</p>
              <form action="/api/srpayx-buy" method="post">
                <input type="hidden" name="customer_mobile" value="9999999999" />
                <input type="hidden" name="amount" value="60" />
                <input type="hidden" name="planname" value="6 Months Premium" />
                <button type="submit" className="buy-btn">Pay ₹60 & Buy</button>
              </form>
            </div>
          </div>

          {/* 12 Months Premium */}
          <div className="stat-outer">
            <div className="dot"></div>
            <div className="card">
              <h2>12 Months Premium</h2>
              <p>₹100 Only</p>
              <form action="/api/srpayx-buy" method="post">
                <input type="hidden" name="customer_mobile" value="9999999999" />
                <input type="hidden" name="amount" value="100" />
                <input type="hidden" name="planname" value="12 Months Premium" />
                <button type="submit" className="buy-btn">Pay ₹100 & Buy</button>
              </form>
            </div>
          </div>

          {/* Lifetime Premium */}
          <div className="stat-outer highlight">
            <div className="dot"></div>
            <div className="card">
              <div className="tag">Best Deal</div>
              <h2>Lifetime Premium</h2>
              <p>₹999 Only</p>
              <p className="desc">You will get a serial no<br/>that you can put on GG MOUSE PRO<br/>and activate lifetime premium.</p>
              <form action="/api/srpayx-buy" method="post">
                <input type="hidden" name="customer_mobile" value="9999999999" />
                <input type="hidden" name="amount" value="999" />
                <input type="hidden" name="planname" value="Lifetime Premium" />
                <button type="submit" className="buy-btn">Pay ₹999 & Buy Lifetime</button>
              </form>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
