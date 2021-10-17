import React from "react";
import "./icons.css";

interface IconsProps {
  children: JSX.Element | JSX.Element[];
}

const BigIcon = ({ children }: IconsProps): JSX.Element => {
  return <div className="big-icon">{children}</div>;
};

const SmallIcon = ({ children }: IconsProps): JSX.Element => {
  return <div className="small-icon">{children}</div>;
};

export { BigIcon, SmallIcon };
