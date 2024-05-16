import type { FC } from "react";

type ButtonProp = {
  label: string;
};

const Button: FC<ButtonProp> = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;
