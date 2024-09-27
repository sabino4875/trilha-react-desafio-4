'use client'

import { ButtonContainer } from "./styles";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return <ButtonContainer
    title={props.title} 
    isValid={props.isValid} 
    onClick={props.onClick}>{props.title}</ButtonContainer>;
};

export default Button;
