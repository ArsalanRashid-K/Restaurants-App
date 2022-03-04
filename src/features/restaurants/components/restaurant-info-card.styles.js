import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "react-native";

export const Icon = styled.Image`
  width: 15;
  height: 15;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: 10px;
`;
//  background-color: blue; or  background-color: ${(props) => props.theme.colors.bg.primary}
// styled(Card) -- () because we are taking external components

// ${(props) => props.theme -> will be same for everyone

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
