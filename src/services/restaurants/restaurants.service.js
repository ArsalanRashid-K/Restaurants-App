import { mocks } from "./mock";
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
//    .then() is used for showing ,is it is resolved -result
//    .catch() is used for showing rejects -error
restaurantsRequest()
  .then((result) => {
    // console.log("found ");
  })
  .catch((result) => {
    // console.log("error- not found");
  });
