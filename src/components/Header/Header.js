import React from "react";
import Country from "./Country";
import Setting from "./Setting";
import "./header.scss";

const Header = ({ getDefaultCountry }) => {
  return (
    <div className="header">
      <div className="left">
        <img
          className="logo"
          alt="Faster Pay"
          src={
            "https://duyanh3110.github.io/fasterpay/assets/fp-logo-light.svg"
          }
        />
        <Country getDefaultCode={getDefaultCountry} />
      </div>
      <div className="right">
        <Setting image="assets/user-icon.svg" label="Logout" />
        <Setting image="assets/language.svg" label="Eng" />
        <Setting image="assets/help.svg" />
      </div>
    </div>
  );
};

export default Header;
