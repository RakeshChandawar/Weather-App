import React, { useState } from "react";

const apikey = "5b144ab1309801d053996743eab223d1";

function App() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchCurrent = async () => {
      const current = `http://api.weatherstack.com/current?access_key=${apikey}&query=${city}`;
      const response = await fetch(current);
      const data = await response.json();

      const cityInfo = {
        Name: data.location.name,
        Temperature: data.current.temperature,
        Description: data.current.weather_descriptions[0],
      };

      setInfo(cityInfo);
      setCity("");
    };
    fetchCurrent();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button type="submit">Current</button>
        <button type="submit">Historic</button>
      </form>
      <div>
        <li>City: {info.Name}</li>
        <li>Temperarure : {info.Temperature} °C</li>
        <li>Description : {info.Description}</li>
      </div>
    </div>
  );
}
export default App;
