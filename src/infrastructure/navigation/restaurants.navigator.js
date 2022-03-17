import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        // options={{
        //   headerShown: false,
        // }} // the name is the header name
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>faweaf</Text>}
        // the name is the header name
      />
    </RestaurantStack.Navigator>
  );
};
