import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (positin, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[positin];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};
//props name same as CSS property will show error in any OS ex prop name positon showed error
// changing the prop name that does not match the CSS property.. ex-> prop name positin or any random name.. didnt show any error in any OS

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
