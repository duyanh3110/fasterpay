import React from "react";
import Order from "./Order";
import PaymentInfo from "./PaymentInfo";
import PaymentMethod from "./PaymentMethod";
import Card from "./Card";
import SuccessPayment from "./SuccessPayment";
import Route from "../Route";
import "./payment.scss";

const Payment = ({ countryCode }) => {
  return (
    <div className="content">
      <div className="payment">
        <PaymentInfo />
        <Route path="/">
          <PaymentMethod countryCode={countryCode} />
          <Card />
        </Route>
        <Route path="/transaction">
          <SuccessPayment />
        </Route>
      </div>
      <Order />
    </div>
  );
};

export default Payment;
