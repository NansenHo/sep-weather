// types
import { WeatherData } from "@/app/types/weather";
// styles
import styles from "./styles.module.scss";

interface CurrentWeatherProps {
  weatherData: WeatherData;
}

export default function CurrentWeather({ weatherData }: CurrentWeatherProps) {
  return (
    <>
      {weatherData && (
        <div className={styles.container}>
          <p className={styles.location}>{weatherData.location.name}</p>
          <p className={styles.temperature}>{weatherData.current.temp_c}°C</p>
          <p className={styles.condition}>
            {weatherData.current.condition.text}
          </p>
          <img
            className={styles.icon}
            src={weatherData.current.condition.icon}
            alt="天気アイコン"
          />
        </div>
      )}
    </>
  );
}
