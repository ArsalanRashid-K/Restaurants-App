import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

// imports of function or screens

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
// importing text from expo/google font
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// MAIN PROGRAM STARTS FROM HERE---->
export default function App() {
  // eslint-disable-next-line no-trailing-spaces

  // snytax for font.. from->react native expo font  github
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  // if both are not called then return null
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* we only have to wrap theme provider once because it uses context api.
      // what ever is wrapped in theme provider can access it . even if its is down below the tree
      // since theme from index.js has object . call them specificly by props.theme */}

        {/*  RestaurantsContextProvider all children  can access the restaurant prop */}
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
