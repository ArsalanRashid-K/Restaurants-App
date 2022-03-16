import React from "react";
import { Text } from "react-native";

// import of navigation bar and icons .
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SafeArea } from "../../components/Utility/safe-area-component";
import { RestaurantsNavigator } from "./restaurants.navigator";
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

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />

        <Tab.Screen name="Map" component={Maps} />

        <Tab.Screen
          name="Settings"
          component={Setting}
          // options={{ headerShown: false, tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
