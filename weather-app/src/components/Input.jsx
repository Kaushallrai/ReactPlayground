import { useWeather } from "../context/Weather";
const Input = () => {
  const weather = useWeather();

  return (
    <input
      className="input-field"
      placeholder="Search city"
      type="text"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
