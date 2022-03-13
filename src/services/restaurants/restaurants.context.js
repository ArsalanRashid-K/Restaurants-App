import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();
//  RestaurantsContextProvider - whatever inside this can access the props value
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //  the restaurants is an empty array but value is set by in retrieveRestaurants by setRestaurants(results)), can also do this  setRestaurants([1, 2, 3]);
  //results  has the mock api value. do console.log(results);

  // console.log(restaurants);
  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          // console.log(results);
          setIsLoading(false);
          setRestaurants([1, 2, 3]);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  // console.log(retrieveRestaurants);
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  //  to access this at a particular place inside - usecontext(RestaurantsContext) is  used.
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
