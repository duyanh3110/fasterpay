import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentMethodList = () => {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    const getPaymentMethod = async () => {
      const { data } = await axios.post(
        "https://api.paymentwall.com/api/payment-systems/",
        {},
        {
          params: {
            key: "d66e8a3b6cb457a242329cbfb98f60f3",
            country_code: "FI",
          },
        }
      );

      setPaymentMethod(data);
    };

    getPaymentMethod();
  }, []);

  const renderedItem = paymentMethod.map((item, index) => {
    return (
      <div key={item.id} className="item">
        <div
          className={`logo ${select === index ? "selected" : ""}`}
          onClick={() => setSelect(index)}
        >
          <img alt={item.img_class} src={item.img_url}></img>
        </div>
        <div className="title">{item.name}</div>
      </div>
    );
  });

  return <div className="list">{renderedItem}</div>;
};

export default PaymentMethodList;
