const formatCountryName = (countryCode) => {
  const language = "en";
  return new Intl.DisplayNames(language, {
    type: "region",
  }).of(countryCode);
};

export default formatCountryName;
