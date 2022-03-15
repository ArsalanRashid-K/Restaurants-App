import React, { useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { FlatList } from "react-native";

import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/Utility/safe-area-component";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  //  restaurantContext  this is used to access the provider
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  // console.log(restaurants);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />

      <FlatList
        // now the data is using the array from restaurantContext restaurant
        data={restaurants}
        // it does not matter what we name the data it is just there for how many times it shows on the screen
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        //  the data { fe: 1 } and item should be same {(item) => item.fe}

        contentContainerStyle={{ padding: 16 }}
        // contentContainerStyle-> applied to the scroll view content container which wraps all of the child views.
      />
    </SafeArea>
  );
};
