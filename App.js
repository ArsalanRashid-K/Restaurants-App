import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";

// imports of function or screens
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/Utility/safe-area-component";

// importing text from expo/google font
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// import of navigation bar and icons .
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons"; //random icon import to practice
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// part of Tab. navigation syntax
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

//Screens
const Setting = () => (
  <SafeArea>
    <Text>setting</Text>
  </SafeArea>
);
const Maps = () => (
  <SafeArea>
    <Text>mapssss</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,

    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />

            <Tab.Screen name="Map" component={Maps} />

            <Tab.Screen
              name="Settings"
              component={Setting}
              // options={{ headerShown: false, tabBarBadge: 3 }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
