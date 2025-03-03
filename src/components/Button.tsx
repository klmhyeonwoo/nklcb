"use client";
import React, { PropsWithChildren } from "react";

type ButtonProps = {
  // ... button types
} & PropsWithChildren<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">
>;

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}> {children} </button>;
}

export default Button;
