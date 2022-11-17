const axios = require("axios");

// const whereAmI = async function (latitude, longitude) {
//   try {
//     const resLocation = await axios.get(
//       `https://geocode.xyz/${latitude},${longitude}?json=1`
//     );
//     const data = resLocation.data;
//     if (resLocation.status !== 200)
//       throw new Error(`Problem with geocoding ${resLocation.status}`);

//     console.log(`You are in ${data.city}, ${data.country}`);

//     const resCountry = await axios.get(
//       `https://restcountries.com/v2/name/${data.country}`
//     );
//     if (resLocation.status !== 200)
//       throw new Error(`Problem with geocoding ${resCountry.status}`);

//     // console.log(resCountry.data[0]);
//   } catch (err) {
//     console.error(`${err.message} 💥`);
//   } finally {
//     console.log("finally do something optional");
//   }
// };
// whereAmI(52.50177, 13.40483);
// whereAmI(52.36039, 4.89688);
// console.log("FIRST");

//Running Promises in Parallel
// const get3Countries = async function (country1, country2, country3) {
//   try {
//     const resCountry1 = await axios.get(
//       `https://restcountries.com/v2/name/${country1}`
//     );
//     const resCountry2 = await axios.get(
//       `https://restcountries.com/v2/name/${country2}`
//     );
//     const resCountry3 = await axios.get(
//       `https://restcountries.com/v2/name/${country3}`
//     );
//     const [data1] = resCountry1.data;
//     const [data2] = resCountry2.data;
//     const [data3] = resCountry3.data;

//     console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.error(`${err}`);
//   }
// };

// get3Countries("netherlands", "canada", "portugal");

const get3Countries = async function (country1, country2, country3) {
  try {
    const data = await Promise.all([
      await axios.get(`https://restcountries.com/v2/name/${country1}`),
      await axios.get(`https://restcountries.com/v2/name/${country2}`),
      await axios.get(`https://restcountries.com/v2/name/${country3}`),
    ]);

    const capitals = data.map((country) => country.data[0].capital);
    console.log([capitals]);
  } catch (err) {
    console.error(`${err}`);
  }
};

get3Countries("netherlands", "canada", "portugal");
