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
  const restaurantContext = useContext(RestaurantsContext);

  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <FlatList
        data={restaurantContext.restaurants}
        // it does not matter what we name the data it is just there for how many times it shows on the screen
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        //  the data { fe: 1 } and item should be same {(item) => item.fe}

        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
        // contentContainerStyle-> applied to the scroll view content container which wraps all of the child views.
      />
    </SafeArea>
  );
};
