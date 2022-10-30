'use client'
import React from 'react';
import {Button} from "@mui/material";

type Props = {
  text:string
  onClick:() => void
  variant?:"text" | 'contained' | 'outlined'
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
}

const PrimaryButton = ({text,onClick,variant='contained',color='primary'}:Props) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {text}
    </Button>
  );
};

export default PrimaryButton;