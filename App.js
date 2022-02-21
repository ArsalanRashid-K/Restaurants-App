import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { ThemeProvider } from "styled-components/native";

import { thme } from "./src/infrastructure/theme";
import { colors } from "./src/infrastructure/theme/colors";

//  thme is coming from index.js in infractrusture theme ->import { thme } from "./src/infrastructure/theme";  to call it we use       <ThemeProvider theme={thme}>

// colors is coming from -> import { colors } from "./src/infrastructure/theme/colors";   to call it ->  <ThemeProvider theme={colors}>

// these are going to restaurant screen ... so what ever in the restaurantScreen has ->import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
// can be accessed ... this include restaurant-info-card.component..

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
