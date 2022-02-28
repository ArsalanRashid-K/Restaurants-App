import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

// these are key name which also reference to the functions above
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
// console.log(variants);r

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;
//  this is a short hand syntax. ({ variant, theme })
//   ${(props) => varints[props.variant](theme)}-> if we do props here.  AND  ${(props) => defaultTextStyles(props.theme)}

// ${({ theme }) => defaultTextStyles(theme)} ->when <Text __>abc</Text> when there is nothing specific given ,.so the defaultTextStyles is called.
// but when variant is given <Text variant="error">abc</Text> -> error is called obj variant

Text.defaultProps = {
  variant: "body",
};
