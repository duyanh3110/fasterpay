import React from "react";
import PaymentMethodList from "./PaymentMethodList";

const PaymentMethod = ({ countryCode }) => {
  return (
    <div className="payment-method">
      <div className="title">Choose payment methods</div>
      {countryCode ? <PaymentMethodList countryCode={countryCode} /> : null}
    </div>
  );
};

export default PaymentMethod;
