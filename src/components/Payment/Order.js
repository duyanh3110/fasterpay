import React from "react";

const Order = () => {
  return (
    <div className="order">
      <div className="title">Order FP1763415-9</div>
      <div className="info">
        500 G-Coins golden <br /> Package
      </div>
      <div className="price">
        <div className="row">
          <div>Amount</div>
          <div>45.00 EUR</div>
        </div>
        <div className="row">
          <div>Taxes</div>
          <div>0.00 EUR</div>
        </div>
      </div>
      <div className="total">
        <div className="label">Total amount</div>
        <div>45.00 EUR</div>
      </div>
      <div className="scan">
        <div className="label">Pay with the FasterPay app</div>
        <img
          alt="qr code"
          src="https://duyanh3110.github.io/fasterpay/assets/qr-code.svg"
        />
        <div className="instruction">QR Payment instruction</div>
      </div>
    </div>
  );
};

export default Order;
