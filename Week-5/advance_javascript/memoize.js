//dummy api call which will return a dummy temperature.
let getTemperatureForCity = function (city) {
  return 20;
};

let memoize = function (getTemperatureForCity) {
  const temperatureData = {
    "New York": 20,

    London: 18,

    Paris: 22,

    Tokyo: 25,

    Sydney: 28,
  };
  return function (...args) {
    if (temperatureData[args]) {
      return temperatureData[args];
    } else {
      const result = getTemperatureForCity(args);
      temperatureData[args] = result;
      return result;
    }
  };
};

const tempMemo = memoize(getTemperatureForCity);
tempMemo("Aundh");
