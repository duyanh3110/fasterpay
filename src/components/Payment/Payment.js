import React, { useState } from "react";
import Order from "./Order";
import PaymentInfo from "./PaymentInfo";
import PaymentMethod from "./PaymentMethod";
import Card from "./Card";
import SuccessPayment from "./SuccessPayment";
import "./payment.scss";

const Payment = ({ countryCode }) => {
  const [success, setSuccess] = useState(false);

  return (
    <div className="content">
      <div className="payment">
        <PaymentInfo />
        {success ? (
          <SuccessPayment />
        ) : (
          <React.Fragment>
            <PaymentMethod countryCode={countryCode} />
            <Card
              setSuccess={() => {
                setSuccess(!success);
              }}
            />
          </React.Fragment>
        )}
      </div>
      <Order />
    </div>
  );
};

export default Payment;
