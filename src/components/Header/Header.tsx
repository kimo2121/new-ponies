import React from "react";
import "./header.css";

interface HeaderTypes {
  header?: string;
}
const Header: React.FC<HeaderTypes> = ({ header }) => {
  return <div className="header-style">{header}</div>;
};

export default Header;
