const axios = require("axios");

const whereAmI = async function (lat, lng) {
  try {
    const resLocation = await axios.get(
      `https://geocode.xyz/${lat},${lng}?json=1`
    );
    const data = resLocation.data;
    if (resLocation.status !== 200)
      throw new Error(`Problem with geocoding ${resLocation.status}`);

    console.log(`You are in ${data.city}, ${data.country}`);

    const resCountry = await axios.get(
      `https://restcountries.com/v2/name/${data.country}`
    );

    // console.log(resCountry.data[0]);
  } catch (err) {
    console.error(`${err.message} 💥`);
  } finally {
    console.log("finally do something optional");
  }
};
whereAmI(52.50177, 13.40483);
whereAmI(52.36039, 4.89688);
console.log("FIRST");
