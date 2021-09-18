import React from "react";
import "./footer.css";

import { FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-external-links">
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
          <a href="/">Contact Us</a>
        </div>
        <p>© Copyright 2021 Poniez Union</p>
        <a className="twitter" href="/">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
