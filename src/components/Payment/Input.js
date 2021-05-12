import React, { useState } from "react";

const Input = ({ type, name, placeholder, checkValid }) => {
  const [valid, setValid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onInputChange = ({ target }) => {
    if (target.value && target.value.length > 0) {
      if (name === "name") {
        // Validate input character only
        let regEx = /^[ a-zA-Z\-\’]+$/;
        if (target.value.match(regEx)) {
          setValid(true);
          checkValid(name, true);
        } else {
          setValid(false);
          checkValid(name, false);
          setErrorMessage("Invalid name");
        }
      } else if (name === "number") {
        // Add space to number
        const clearValue = clearDigit(target.value);
        let newValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
          4,
          8
        )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
        target.value = newValue.trim();

        // Validator credit card number
        if (target.value.length === 19) {
          let checkValue = target.value.replaceAll(" ", "");
          let sum = 0;
          let checkNumber = 0;
          let isEven = false;

          // Validate by Luhn algorithm
          for (let index = checkValue.length - 1; index >= 0; index--) {
            // Convert string to integer
            checkNumber = parseInt(checkValue[index], 10);

            if (isEven && (checkNumber *= 2) > 9) {
              checkNumber -= 9;
            }

            sum += checkNumber;
            isEven = !isEven;
          }

          if (sum % 10 === 0) {
            setValid(true);
            checkValid(name, true);
          }
        } else {
          setValid(false);
          checkValid(name, false);
          setErrorMessage("Invalid card number");
        }
      } else if (name === "expiry") {
        // Remove digit from input
        const clearValue = clearDigit(target.value);
        target.value = clearValue;

        // Add "/" between month and year
        let month, year;
        if (clearValue.length >= 3) {
          month = clearValue.slice(0, 2);
          year = clearValue.slice(2, 4);
          target.value = `${month}/${year}`;
        }

        // Validate expiry date with current
        let expiryDate = new Date(`20${year}-${month}-01`);
        if (expiryDate >= new Date()) {
          setValid(true);
          checkValid(name, true);
        } else {
          setValid(false);
          checkValid(name, false);
          setErrorMessage("Invalid date");
        }
      } else if (name === "cvv") {
        const clearValue = clearDigit(target.value);
        target.value = clearValue.slice(0, 3);
        if (target.value.length === 3) {
          setValid(true);
          checkValid(name, true);
        } else {
          setValid(false);
          checkValid(name, false);
          setErrorMessage("Invalid code");
        }
      }
    } else {
      setValid(false);
      if (name === "name") {
        setErrorMessage("Invalid name");
      }
    }
  };

  const clearDigit = (value) => {
    return value.replace(/\D+/g, "");
  };

  return (
    <React.Fragment>
      <input
        className={`input ${
          valid === "" ? "default" : valid ? "valid" : "invalid"
        }`}
        type={type}
        placeholder={placeholder}
        required
        onChange={(e) => onInputChange(e)}
      />
      <div className={`error ${valid === "" || valid ? "hide" : "show"}`}>
        {errorMessage}
      </div>
    </React.Fragment>
  );
};

export default Input;
