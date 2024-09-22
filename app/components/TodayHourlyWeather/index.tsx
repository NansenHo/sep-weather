// types
import { WeatherData } from "@/app/types/weather";
// styles
import styles from "./styles.module.scss";

interface TodayHourlyWeatherProps {
  todayHourlyWeather: WeatherData["forecast"]["forecastday"][0]["hour"];
  currentHour: number;
}

export default function TodayHourlyWeather({
  todayHourlyWeather,
  currentHour,
}: TodayHourlyWeatherProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>本日の時間ごとの天気</h2>
      </header>
      <div className={styles.content}>
        {todayHourlyWeather
          .filter((hour) => Number(hour.time.slice(11, 13)) >= currentHour)
          .map((hour) => (
            <div key={hour.time} className={styles.hourlyItem}>
              <p className={styles.time}>{hour.time.slice(11, 13)}</p>
              <img
                className={styles.icon}
                width={36}
                height={36}
                src={hour.condition.icon}
                alt="天气图标"
              />
              <p className={styles.temperature}>{Math.round(hour.temp_c)}°C</p>
            </div>
          ))}
      </div>
    </section>
  );
}
