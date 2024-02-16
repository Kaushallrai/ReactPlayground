import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState();

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchCurrentLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
      console.log(position);
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
