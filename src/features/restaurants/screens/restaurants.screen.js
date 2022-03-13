import React, { useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/Utility/safe-area-component";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  //  restaurantContext  this is used to access the provider
  const restaurantContext = useContext(RestaurantsContext);

  // console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <FlatList
        // now the data is using the array from restaurantContext restaurant
        data={restaurantContext.restaurants}
        // it does not matter what we name the data it is just there for how many times it shows on the screen
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        //  the data { fe: 1 } and item should be same {(item) => item.fe}

        contentContainerStyle={{ padding: 16 }}
        // contentContainerStyle-> applied to the scroll view content container which wraps all of the child views.
      />
    </SafeArea>
  );
};
