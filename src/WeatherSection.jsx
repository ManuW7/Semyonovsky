import { useEffect, useState } from "react";

function WeatherSection(props) {
  const weatherDataMap = {
    0: { text: "clear", icon: null },
    1: { text: "mostly clear", icon: null },
    2: { text: "partly cloudy", icon: null },
    3: { text: "overcast", icon: null },
    45: { text: "foggy", icon: null },
    48: { text: "freezing foggy", icon: null },
    51: {
      text: "lightly drizzling",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    53: {
      text: "drizzling",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    55: {
      text: "heavily drizzling",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    56: {
      text: "light freezing drizzle",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    57: {
      text: "dense freezing drizzle",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    61: {
      text: "lightly raining",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    63: {
      text: "rainy",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    65: {
      text: "heavily raining",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    66: {
      text: "light freezing rain",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    67: {
      text: "heavy freezing rain",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    71: { text: "lightly snowing", icon: null },
    73: { text: "snowy", icon: null },
    75: { text: "heavily snowing", icon: null },
    77: { text: "snowy (grains)", icon: null },
    80: {
      text: "light rain showers",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    81: {
      text: "rain showers",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    82: {
      text: "violent rain showers",
      icon: "/Semyonovsky/assets/graphic_assets/rainIcon.png",
    },
    85: { text: "snow showers", icon: null },
    86: { text: "heavy snow showers", icon: null },
    95: { text: "thunderstormy", icon: null },
    96: { text: "thunderstormy with hail", icon: null },
    99: { text: "severe thunderstormy with hail", icon: null },
  };

  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);
  const [iconURL, setIconUrl] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${
          props.latitude ? props.latitude : "59.924718"
        }&longitude=${
          props.longitude ? props.longitude : "30.327645"
        }&current=temperature_2m,is_day,weather_code,precipitation&timezone=auto`
      );

      const weatherData = await res.json();

      const weatherCode = weatherData.current.weather_code;

      setTemperature(Math.round(weatherData.current.temperature_2m));
      const weatherInfo = weatherDataMap[weatherCode] || {
        text: "unknown",
        icon: null,
      };

      setWeather(weatherInfo.text);
      setIconUrl(weatherInfo.icon);
    }

    getWeather();
  }, []);

  return (
    <>
      <section className="weatherSectionWrapper">
        <div className="weatherTextWrapper">
          <p className="weatherText">
            THE TEMPERATURE IN THE PLACE NOW IS {`${temperature}°C`}. IT'S{" "}
            {`${weather}`.toUpperCase()}.
          </p>
        </div>
        <div className="weatherImagesWrapper">
          <img src={iconURL} alt="" className="weatherIcon" />
          <img
            src="./src/assets/graphic_assets/eyesIcon.png"
            alt=""
            className="eyesIcon"
          />
        </div>
        <img
          src="./src/assets/graphic_assets/weatherSectionPicture.png"
          alt=""
          className="weatherSectionImage"
        />
      </section>
    </>
  );
}

export default WeatherSection;
