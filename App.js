import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/Utility/safe-area-component";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";

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

export default function App() {
  // snytax for font.. from->react native expo font  github
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = "md-restaurant";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                } else if (route.name === "Map") {
                  iconName = "md-map";
                }

                // You can return any component that you like here!
                // return <AntDesign name={iconName} size={size} color={color} />;
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />

            <Tab.Screen name="Map" component={Maps} />

            <Tab.Screen
              name="Settings"
              component={Setting}
              // options={{ headerShown: false ,tabBarBadge: 3,}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
