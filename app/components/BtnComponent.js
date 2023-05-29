"use client";
import { Button } from "antd";
import React from "react";

const BtnComponent = ({
  title,
  type,
  onClick,
  icon,
  shape,
  size,
  style,
}) => {
  return (
    <Button
      size={size}
      shape={shape}
      icon={icon}
      onClick={onClick}
      type={type}
      style={style}
    >
      {title}
    </Button>
  );
};

export default BtnComponent;
