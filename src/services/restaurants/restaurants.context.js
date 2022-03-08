import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return <RestaurantsContext.Provider>{children}</RestaurantsContext.Provider>;
};
