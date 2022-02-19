import React from "react";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantContainer = styled.View` flex: 1;
padding: 16px;
background Color: white`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>

    <RestaurantContainer>
      <RestaurantInfoCard />
    </RestaurantContainer>
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    /* marginTop: StatusBar.currentHeight  -> we can add this if the android stusbar does not show also if use Status bar from expo  */
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
