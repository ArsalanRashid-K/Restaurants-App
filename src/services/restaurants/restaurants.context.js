import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

//  RestaurantsContextProvider - whatever inside this can access the props value
export const RestaurantsContextProvider = ({ children }) => {
//  to access this at a particular place inside - usecontext(RestaurantsContext) is  used.
  return (
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
