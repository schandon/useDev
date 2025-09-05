import { ButtonHTMLAttributes } from "react";
import Styles from "./Input.module.css";

export type InputProps = {
  variant?: "primary" | "secondary";
}& ButtonHTMLAttributes<HTMLInputElement>;

const Input = ({
  variant = "primary",
  ...props
}: InputProps) => {
  return (
      <input className={Styles[variant]}{...props}/>   
  );
};

export default Input;
