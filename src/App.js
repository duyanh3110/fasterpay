import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";
import Transaction from "./components/Payment/Transaction";
import Route from "./components/Route";
import "./App.scss";

const App = () => {
  return (
    <div className="widget">
      <Header />
      <Route path="/">
        <Payment />
      </Route>
      <Route path="/transaction">
        <Transaction />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
