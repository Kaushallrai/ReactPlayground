import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();
  return (
    <div className="card">
      <img src={weather.data?.current?.condition?.icon} alt="" />
      <h2>{weather.data?.current?.temp_c}. C</h2>
      <h5>
        {weather.data?.location?.name}, {weather.data?.location?.country},{" "}
        {weather.data?.location?.tz_id}
      </h5>
    </div>
  );
};

export default Card;
