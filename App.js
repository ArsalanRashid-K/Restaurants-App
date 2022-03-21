import React, { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

// imports of function or screens

//
// import * as firebase from "firebase/compat/app";
// OR
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation";
// importing text from expo/google font
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

//  FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyA-97l62d-vK8l_Gekmr0JQveCpXCDOzi0",
  authDomain: "mealstogo-50a6f.firebaseapp.com",
  projectId: "mealstogo-50a6f",
  storageBucket: "mealstogo-50a6f.appspot.com",
  messagingSenderId: "916114640663",
  appId: "1:916114640663:web:ddd773d5bbe8f106d0f152",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
