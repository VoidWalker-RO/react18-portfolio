import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";

export default function MyCity() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getWeather("Kyiv").then(setData);
  }, []);

  if (!data) return <div className="container">Please wait a minute. Loading...</div>;

  return (
    <div className="container">
      <h1>Моє місто</h1>

      <div className="card">
        <h2>{data.location.name}, {data.location.country}</h2>

        <div className="grid">
          <div className="card">{data.current.temp_c}°C</div>
          <div className="card">{data.current.condition.text}</div>
          <div className="card">{data.location.lat}, {data.location.lon}</div>
        </div>
      </div>
    </div>
  );
}