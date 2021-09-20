import React from "react";
import "./footer.css";

import { FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-external-links">
          <a href="/">Legal</a>
          <a href="https://app.termly.io/document/disclaimer/ac2a6e8d-ff6d-4fac-b8bc-fe7847a32c9e">
            Disclaimer
          </a>
          <a href="https://app.termly.io/document/privacy-policy/c11e2acc-3ef6-4869-9f7c-98c6fbe440c1">
            Privacy
          </a>
          <a href="/">Contact Us</a>
        </div>
        <p>© Copyright 2021 Poniez Union</p>
        <a className="twitter" href="https://twitter.com/poniezunion">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
