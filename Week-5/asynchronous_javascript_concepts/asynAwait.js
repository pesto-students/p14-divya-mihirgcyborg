let getExchangeRate = async function (currencyCode) {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest");
    if (!response.ok) {
      throw new Error("failed to fetch data" + response.status());
    }
    const data = await response.json();
    const rate = data.rates[currencyCode];

    if (rate == undefined) return null;
    return parseFloat(rate.toFixed(4));
  } catch (err) {
    return err;
  }
};

getExchangeRate("INR")
  .then((rate) => console.log(rate))
  .catch((err) => console.log(err));
