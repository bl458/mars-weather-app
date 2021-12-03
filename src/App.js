import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <main className="cur-weather">
        <h1 className="main-title">Latest weather at Elysium Plantitia</h1>

        <div className="date">
          <h2 className="section-title section-title--date">Sol 377</h2>
          <p className="date__day">September 18</p>
        </div>

        <div className="temp">
          <h2 className="section-title">Temperature</h2>
          <p className="reading">High: -20°C</p>
          <p className="reading">Low: -120°C</p>
        </div>

        <div className="wind">
          <h2 className="section-title">Wind</h2>
          <p className="reading">75kph</p>
          <div className="wind__direction">
            <p className="sr-only">45deg</p>
            <div className="wind__arrow"></div>
          </div>
        </div>

        <div className="info">
          <p>
            InSight is taking daily weather measurements (temperature, wind,
            pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
            plain near Mars’ equator.
          </p>
          <p>
            his is only a part of InSight’s mission.{" "}
            <a href="https://mars.nasa.gov/insight/mission/overview/">
              Click here
            </a>{" "}
            to find out more.
          </p>
        </div>

        <div className="unit">
          <label htmlFor="cel">°C</label>
          <input type="radio" id="cel" name="unit" checked />
          {/* when unit__toggle is clicked, unit needs to change */}
          <button className="unit__toggle"></button>
          <label htmlFor="fah">°F</label>
        </div>
      </main>

      <div className="prev-weather">
        <label htmlFor="weather-toggle" className="show-previous-weather-label">
          &#8593; <span className="sr-only">Show previous weather</span>
        </label>

        <input
          type="checkbox"
          id="weather-toggle"
          className="show-previous-weather-toggle"
        />

        <h2 className="main-title">Previous 7 days</h2>
        <div className="previous-days">
          <div className="previous-day">
            <h3 className="previous-days__sol">Sol 371</h3>
            <p className="previous-day__date">September 17</p>
            <p className="previous-day__temp">High: -20°C</p>
            <p className="previous-day__temp">Low: -120°C </p>
            <button className="previous-day__more-info"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
