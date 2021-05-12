import React from "react";

const Setting = ({ label, image }) => {
  return (
    <div className="setting">
      <img
        alt={label}
        src={"https://duyanh3110.github.io/fasterpay/" + image}
      />
      <p className={label ? "label" : "label hidden"}>{label}</p>
    </div>
  );
};

export default Setting;
