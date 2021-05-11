import React from "react";

const Setting = ({ label, image }) => {
  return (
    <div className="setting">
      <img alt={label} src={process.env.PUBLIC_URL + image} />
      <p className={label ? "label" : "label hidden"}>{label}</p>
    </div>
  );
};

export default Setting;
