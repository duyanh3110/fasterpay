import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import "./App.scss";

const App = ({ domElement }) => {
  const amount = domElement.getAttribute("data-amount");

  const [countryCode, setCountryCode] = useState("");

  const getDefaultCountry = (code) => {
    setCountryCode(code);
  };

  return (
    <div className="widget">
      <Header getDefaultCountry={getDefaultCountry} />
      <Payment countryCode={countryCode} amount={amount} />
      <Footer />
    </div>
  );
};

export default App;
