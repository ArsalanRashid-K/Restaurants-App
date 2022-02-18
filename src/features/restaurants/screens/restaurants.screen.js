import React from "react";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>

    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,

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
