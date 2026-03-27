// 1. import useState from React
// 3. import useEffect from React
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 2. Create weather state with default "Sunny"
  const[weather, setWeather] =useState("sunny")

  // 4. Create handleRainy function
  // change weather to "Rainy"
  function handleRainy() {
    setWeather("Rainy")
  }

  // 5. Create handleSnowy function
  // change weather to "Snowy"
  function handleSnowy() {
    setWeather("Snowy")
  }

  // 6. Create handleHot function
  // change weather to "Hot"
  function handleHot () {
    setWeather("Hot")
  }
 
  // 7. Create handleReset function
  // change weather back to "Sunny"
  function handleReset(){
    setWeather ("Sunny")
  }


  // 8. Add useEffect that runs when weather changes
  // show alerts based on weather value
  useEffect (weatherUpdate,[weather])


  return (
    <div className="page">
      <div className="card">
        <h1>Weather Warning App</h1>
        <p className="subtitle">
          Practice using useEffect with weather changes.
        </p>

        <div className="weather-box">
          <h2>Current Weather</h2>

          {/* 9. Display weather here */}
          <p className="output">Weather: </p>

          <button
            className="btn"
            // 10. connect to handleRainy
            onClick={handleRainy}
          >
            Rainy 🌧️
          </button>

          <button
            className="btn"
            // 11. connect to handleSnowy
            onClick={handleSnowy}
          >
            Snowy ❄️
          </button>

          <button
            className="btn"
            // 12. connect to handleHot
            onClick={handleHot}
          >
            Hot ☀️
          </button>

          <button
            className="btn secondary"
            // 13. connect to handleReset
            onClick={handleHot}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;