export const selectAllWeatherDataOpenWeather = (state) => ({
  currentOpenWeather: state.weather.openWeatherData?.current,
  dailyOpenWeather: state.weather.openWeatherData?.daily,
  hourlyOpenWeather: state.weather.openWeatherData?.hourly,
});

export const selectAllWeatherDataStormGlass = (state) => ({
  hourlyStormGlass: state.weather.stormGlassData?.hours,
});

export const selectWeatherInfo = (state) => ({
  loadingWeather: state.weather.loading,
  errorWeather: state.weather.error,
});
