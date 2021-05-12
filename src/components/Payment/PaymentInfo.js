import React from "react";

const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <div className="title">Pay to</div>
      <img
        src="https://duyanh3110.github.io/fasterpay/assets/pubg-logo.svg"
        alt="pubg"
      />
      <div className="game">
        <div className="name">PlayerUnknown's Battlegrounds</div>
        <div className="company">
          <div className="name">FasterPay Business Pro Account</div>
          <div className="verify">
            <img
              src={process.env.PUBLIC_URL + "/assets/verify.svg"}
              alt="verify"
            />
            <div className="text">Verified</div>
          </div>
        </div>
        <div className="rating">
          <img
            src={process.env.PUBLIC_URL + "/assets/rating.svg"}
            alt="rating"
          />
          <div className="text">4.6</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
