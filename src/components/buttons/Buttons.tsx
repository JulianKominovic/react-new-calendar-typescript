import React from "react";
import "./buttons.css";
interface CallbackButtonProps {
  children: JSX.Element | JSX.Element[];
  onClickCallback: () => any;
}

const CallbackButton = ({
  children,
  onClickCallback,
}: CallbackButtonProps): JSX.Element => {
  return <button onClick={onClickCallback}>{children}</button>;
};

interface UselessButtonProps {
  children: JSX.Element | JSX.Element[];
  classes: string;
}

const UselessButton = ({
  children,
  classes = "",
}: UselessButtonProps): JSX.Element => {
  return <button className={classes}>{children}</button>;
};

export { UselessButton, CallbackButton };
