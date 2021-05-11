import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import "./App.scss";

const App = () => {
  return (
    <div className="widget">
      <Header />
      <Payment />
      <Footer />
    </div>
  );
};

export default App;
