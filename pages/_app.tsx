import { StrictMode, useEffect, useMemo, useState } from "react";
import { WeatherContext } from "../library/Context";
import { Forecast } from "../library/types/Forecast";
import { fetchBasicForecast } from "../library/WeatherService";
import "../style/global.scss";

export default function MyApp({ Component, pageProps }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<Forecast | null>(null);

  useEffect(() => {
    let geo = navigator.geolocation;
    geo.getCurrentPosition((position) => {
      // Floor the lat/lon to 3 decimal places so response caching works better.
      let lat = Math.floor(position.coords.latitude * 1000) / 1000;
      let lon = Math.floor(position.coords.longitude * 1000) / 1000;

      fetchBasicForecast(lat, lon).then((data) => {
        setLoading(false);
        setWeatherData(data);
        console.debug("Weather data loaded.", data);
      });
    });
  }, []);

  return (
    <StrictMode>
      <WeatherContext.Provider
        value={useMemo(() => {
          return { loading: loading, data: weatherData };
        }, [loading, weatherData])}
      >
        <Component {...pageProps} />
      </WeatherContext.Provider>
    </StrictMode>
  );
}
