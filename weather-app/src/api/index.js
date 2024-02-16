const baseURK =
  "https://api.weatherapi.com/v1/current.json?key=bd9c6e85b720400b8cb62749241602";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURK}&q=${city}&aqi=yes`);

  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURK}&q=${lat},${lon}&aqi=yes`);

  return await response.json();
};
