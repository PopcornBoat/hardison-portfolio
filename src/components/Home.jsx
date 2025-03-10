import Hero from "./Hero";
import { useState, useEffect } from "react";

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://express-netlify-deploy-demo.netlify.app/.netlify/functions/api/weather")
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.error("Error fetching weather:", error));
}, []);

  return (
    <section className="w-100 text-center py-5">
            {/* Weather Info */}
            {weather ? (
                <div className="mb-4 p-3 bg-light border rounded">
                <h3>Weather in {weather.city}, {weather.country}</h3>
                <p>
                    <strong>Temperature:</strong> {weather.temperature.current}°C 
                    (Feels like: {weather.temperature.feels_like}°C, 
                    Min: {weather.temperature.min}°C, Max: {weather.temperature.max}°C)
                </p>
                <p><strong>Humidity:</strong> {weather.humidity}%</p>
                <p>
                    <strong>Wind:</strong> {weather.wind.speed} m/s, {weather.wind.direction}°
                </p>
            </div>
            
            ) : (
                <p>Loading weather...</p>
            )}

            {/* Hero Component */}
            <Hero />

            {/* Learn More Button */}
            <a href="/about" className="btn btn-primary mt-3">Learn More</a>
        </section>
  );
}


export default Home;
