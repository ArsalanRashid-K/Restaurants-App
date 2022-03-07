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

const restaurantTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
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
