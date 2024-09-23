import { extractHourFromTime } from "@/app/utils";
import type { WeatherData } from "@/app/types";
import styles from "./styles.module.scss";

interface TodayHourlyWeatherProps {
  readonly todayHourlyWeather: WeatherData["forecast"]["forecastday"][0]["hour"];
  readonly currentHour: number;
}

export function TodayHourlyWeather({
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
          .filter((hour) => extractHourFromTime(hour.time) >= currentHour)
          .map((hour) => (
            <div key={hour.time} className={styles.hourlyItem}>
              <p className={styles.time}>{extractHourFromTime(hour.time)}</p>
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
