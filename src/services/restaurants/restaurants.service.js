import { mocks, mockImages } from "./mock";
// camelize is npm package to help in keeping the name format of fake api and  ours same
import camelize from "camelize";

// location - is varible
export const restaurantsRequest = (location) => {
  // console.log(mocks[location]);
  // new Promise takes resolve and reject if its true return resolve if false return reject
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
// when using new Promise its awaiting something in the future. so it has to return something awaiting--

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    //  this is translating the api to what we provided in restaurants info card components
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  // console.log(mappedResult);
  return camelize(mappedResult);
};
