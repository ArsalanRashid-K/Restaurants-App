import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

//SCREEENS
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

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
        component={RestaurantDetailScreen}
        // the name is the header name
      />
    </RestaurantStack.Navigator>
  );
};
