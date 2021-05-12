import React from "react";

const SuccessPayment = () => {
  return (
    <div className="payment-success">
      <img
        alt="success_icon"
        src="https://duyanh3110.github.io/fasterpay/assets/success_icon.svg"
      />
      <div className="title">Transaction successful</div>
      <div className="info">
        <div className="text">Transaction ID</div>
        <div className="text">1029453384</div>
      </div>
      <div className="info account">
        <div className="text">Account Balance</div>
        <div className="text">198.75 EUR</div>
      </div>
      <div className="action">
        <button className="download">Download receipt</button>
        <a href="/" className="link">
          Back to merchant
        </a>
        <div className="question">
          Any questions? Please contact our <a href="#">Support Center</a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
