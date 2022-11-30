const changeTemperature = (arr1, arr2) => {
  [...arr1].forEach((item) => {
    const newTemp = arr2?.filter((el) => el.time === item.time)[0]?.temperature;
    item.temperature = newTemp;
  });
  return arr1;
};

export default changeTemperature;
