export const selectAllWeatherData = (state) => ({
  currentOpenWeather: state.weather.openWeatherData?.current,
  dailyOpenWeather: state.weather.openWeatherData?.daily,
  hourlyOpenWeather: state.weather.openWeatherData?.hourly,
  hourlyStormGlass: state.weather.stormGlassData?.hours,
});

export const selectWeatherInfo = (state) => ({
  loadingWeather: state.weather.loading,
  errorWeather: state.weather.error,
});
