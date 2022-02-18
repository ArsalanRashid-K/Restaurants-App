import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 10px;
  color: red;
`;

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
    <Card elevation={10} style={styles.Card}>
      <Card.Cover
        style={styles.cover}
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "white",
  },
  cover: { padding: 10, backgroundColor: "white" },
});
