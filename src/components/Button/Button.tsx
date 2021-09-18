import React from "react";
import "./button.css";
import { btnTypes } from "./types";

const Button: React.FC<btnTypes> = ({ className, label, onClickFun }) => {
  return <button className={className}>{label}</button>;
};

export default Button;
