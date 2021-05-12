import React from "react";

const CountryList = ({ onSelect, toggleDropDown }) => {
  const items = [
    {
      name: "United Kingdom",
      country_code: "GB",
      image: "https://duyanh3110.github.io/fasterpay/assets/uk.svg",
    },
    {
      name: "Germany",
      country_code: "DE",
      image: "https://duyanh3110.github.io/fasterpay/assets/de.svg",
    },
    {
      name: "Argentina",
      country_code: "AR",
      image: "https://duyanh3110.github.io/fasterpay/assets/ar.svg",
    },
    {
      name: "Finland",
      country_code: "FI",
      image: "https://duyanh3110.github.io/fasterpay/assets/fi.svg",
    },
  ];

  const selectCountry = (index) => {
    onSelect(items[index]);
    toggleDropDown(true);
  };

  const countryList = items.map((item, index) => {
    return (
      <div
        className="item"
        key={item.country_code}
        onClick={() => selectCountry(index)}
      >
        <img src={item.image} alt={item.country_code} />
        <div className="name">{item.name}</div>
      </div>
    );
  });

  return (
    <div className="list">
      <div className="title">Choose country</div>
      <div className="countries">{countryList}</div>
    </div>
  );
};

export default CountryList;
