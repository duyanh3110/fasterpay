import React, { useState, useEffect } from "react";
import Input from "./Input";

const Card = ({ setSuccess, amount }) => {
  const [nameValid, setNameValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [expiryValid, setExpiryValid] = useState(false);
  const [cvvValid, setCvvValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (type, value) => {
    if (type === "name") {
      setNameValid(value);
    } else if (type === "number") {
      setNumberValid(value);
    } else if (type === "expiry") {
      setExpiryValid(value);
    } else if (type === "cvv") {
      setCvvValid(value);
    }
  };

  useEffect(() => {
    if (nameValid && numberValid && expiryValid && cvvValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [nameValid, numberValid, expiryValid, cvvValid]);

  return (
    <div className="card">
      <div className="title">Payment Information</div>
      <div className="form">
        <div className="item">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            checkValid={handleChange}
          />
        </div>
        <div className="item">
          <Input
            type="tel"
            name="number"
            placeholder="Card Number"
            checkValid={handleChange}
          />
        </div>
        <div className="row item">
          <div className="col">
            <Input
              type="tel"
              name="expiry"
              placeholder="Expiration (MM/YY)"
              checkValid={handleChange}
            />
          </div>
          <div className="col ">
            <Input
              type="tel"
              name="cvv"
              placeholder="CVV"
              checkValid={handleChange}
            />
          </div>
        </div>
        <div className="action">
          <button className="pay" onClick={setSuccess} disabled={isDisabled}>
            Pay {amount}
          </button>
        </div>
      </div>
      <div className="term">
        By paying you agree to FasterPay’s <a href="#">Terms of Service</a>
        <br /> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default Card;
