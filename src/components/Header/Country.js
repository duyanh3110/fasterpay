import React from "react";

const Country = () => {
  return (
    <div className="country">
      <img alt="UK Flag" src={process.env.PUBLIC_URL + "assets/uk.svg"} />
      <p className="label">United Kingdom</p>
    </div>
  );
};

export default Country;
