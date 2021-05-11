import React from "react";
import Order from "./Order";
import PaymentInfo from "./PaymentInfo";
import PaymentMethod from "./PaymentMethod";
import "./payment.scss";

const Payment = () => {
  return (
    <div className="content">
      <div className="payment">
        <PaymentInfo />
        <PaymentMethod />
      </div>
      <Order />
    </div>
  );
};

export default Payment;
