import React from "react";
import PaymentMethodList from "./PaymentMethodList";

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <div className="title">Choose payment methods</div>
      <PaymentMethodList />
    </div>
  );
};

export default PaymentMethod;
