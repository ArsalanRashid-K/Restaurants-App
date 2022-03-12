import { mocks } from "./mock";
// camelize is npm package to help in keeping the name format of fake api and  ours same
import camelize from "camelize";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
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

// restaurantTransform is getting results from mock coz this is called inside restaurantsRequest()
//  we are using map so we can on every single array since this api is in array ->results
const restaurantTransform = ({ results = [] }) => {
  // syntax to call map ((x)=>x) = x will get data from whatever before the DOT .map
  const m = results.map((res) => {
    return {
      // here we are just returning the whole array->...res and also adding some new properties to it.
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isClosedTemporarily: res.business.status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(m);
  // const newResult = camelize(result);
  // return newResult;
};
restaurantsRequest()
  .then(restaurantTransform) // this is just camelizing
  .then((transformedResponse) => {
    // console.log(transformedResponse);
  })
  .catch((err) => {
    // console.log("error- " + err);
  });

//    .then() is used for showing ,is it is resolved -result  and .then(()=>{}) this is the main part
//    .catch() is used for showing rejects -error
