import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();
//  RestaurantsContextProvider - whatever inside this can access the props value
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  // console.log(error);
  //  the restaurants is an empty array but value is set by in retrieveRestaurants by setRestaurants(results)), can also do this  setRestaurants([1, 2, 3]);
  //results  has the mock api value. do console.log(results);

  // console.log(restaurants);
  const retrieveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      // restaurantsRequest() or ("false location") => this is getting its value restaurants.service in which we have already given alocation .
      //  if we overwrite restaurantsRequest("false location") - will show error because of new promise reject
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((results) => {
          // console.log(results);
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  // console.log(retrieveRestaurants);
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      // console.log(locationString);
      retrieveRestaurants(locationString);
    }
  }, [location]);
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
