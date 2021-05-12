import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        © 2020 Fasterpay Ltd. All rights reserved. Fasterpay Limited (FRN:
        900681) is authorised by the Financial Conduct Authority under the
        Electronic Money Regulations 2011 for the issuing of electronic money
        and payment instruments.
      </div>
      <div className="secure">
        <img
          alt="secure"
          src={process.env.PUBLIC_URL + "/assets/secure-logo.svg"}
        />
      </div>
    </div>
  );
};

export default Footer;
