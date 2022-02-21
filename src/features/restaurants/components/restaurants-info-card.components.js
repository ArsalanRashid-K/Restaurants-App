import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background color: white;
`;

// styled(Card) -- () because we are taking external components

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 12px;
  color: ${(props) => props.theme.ui.error};
`;
// ${(props) => props.theme -> will be same for everyone
//<ThemeProvider theme={colors}> will give   color: ${(props) => props.theme.ui.error};
// <ThemeProvider theme={thme}> will give   color: ${(props) => props.theme.colors.ui.error};

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={10}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
