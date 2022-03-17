import React from "react";

import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { SafeArea } from "../../../components/Utility/safe-area-component";

export const RestaurantDetailScreen = ({ route }) => {
  //  route its just a prop coming from restaurant screen
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
