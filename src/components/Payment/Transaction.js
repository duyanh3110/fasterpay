import React from "react";
import PaymentInfo from "./PaymentInfo";
import Order from "./Order";
import SuccessPayment from "./SuccessPayment";

const Transaction = () => {
  return (
    <div className="content">
      <div className="payment">
        <PaymentInfo />
        <SuccessPayment />
      </div>
      <Order />
    </div>
  );
};

export default Transaction;
