import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

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
      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "white",
  },
  cover: { padding: 10, backgroundColor: "#a8e9ff" },
});
