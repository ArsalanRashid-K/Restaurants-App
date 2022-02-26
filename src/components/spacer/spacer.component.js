import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import styled from "styled-components/native";

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
// console.log(getVariant('marginTop',1px));
//props name same as CSS property will show error in any OS ex prop name positon showed error 
// changing the prop name that does not match the CSS property.. ex-> prop name positin or any random name.. didnt show any error in any OS

export const Spacer = styled.View`
  ${({ positin, size, theme }) => getVariant(positin, size, theme)}
`;

// Spacer.defaultProps = {
//   position: "top",
//   size: "small",
// };
