import { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>

        <View style={styles.list}>
          <Text>list </Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,

    /* marginTop: StatusBar.currentHeight  -> we can add this if the android stusbar does not show also if use Status bar from expo  */
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#d4a5d3",
  },
});
