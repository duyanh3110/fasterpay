import React, { useState, useEffect } from "react";
import CountryList from "./CountryList";
import axios from "axios";

const Country = ({ getDefaultCode }) => {
  const [selected, setSelected] = useState({});
  const [hideDropdown, setHideDropdown] = useState(true);

  const onSelect = (object) => {
    setSelected(object);
  };

  const toggleDropDown = (boolean) => {
    setHideDropdown(boolean);
  };

  useEffect(() => {
    const getDefaultCountry = async () => {
      const { data } = await axios.post(
        "https://api.paymentwall.com/api/rest/country",
        {},
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          params: {
            key: "d66e8a3b6cb457a242329cbfb98f60f3",
            uid: "duyanh19962012@gmail.com",
          },
        }
      );

      setSelected({
        name: data.country,
        country_code: data.code,
        image: "https://duyanh3110.github.io/fasterpay/assets/fi.svg",
      });
    };

    getDefaultCountry();
  }, []);

  useEffect(() => {
    getDefaultCode(selected.country_code);
  }, [selected]);

  return (
    <div className="country">
      <div className="default" onClick={() => setHideDropdown(!hideDropdown)}>
        <img alt={selected.country_code} src={selected.image} />
        <p className="label">{selected.name}</p>
      </div>
      {!hideDropdown ? (
        <CountryList toggleDropDown={toggleDropDown} onSelect={onSelect} />
      ) : null}
    </div>
  );
};

export default Country;
