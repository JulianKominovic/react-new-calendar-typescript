import React from "react";
import "./headers.css";

interface HeadersProps {
  text: string;
}

const H1 = ({ text }: HeadersProps): JSX.Element => {
  return <h1 className="header-h1">{text}</h1>;
};

const H2 = ({ text }: HeadersProps): JSX.Element => {
  return <h2 className="header-h2">{text}</h2>;
};

export { H1, H2 };
