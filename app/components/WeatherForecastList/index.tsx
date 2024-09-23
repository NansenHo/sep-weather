import { useRouter } from "next/navigation";

import type { WeatherData } from "@/app/types";
import styles from "./styles.module.scss";

interface WeatherForecastListProps {
  readonly forecastDayWeather: WeatherData["forecast"]["forecastday"];
}

export function WeatherForecastList({
  forecastDayWeather,
}: WeatherForecastListProps) {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>10 日間天気予報</h2>
      </header>
      <div className={styles.content}>
        {forecastDayWeather.map((day) => (
          <div
            key={day.date}
            className={styles.forecastItem}
            onClick={() => {
              router.push(`/weather-detail/${day.date}`);
            }}
          >
            <p className={styles.day}>{day.date}</p>
            <img
              className={styles.icon}
              width={36}
              height={36}
              src={day.day.condition.icon}
              alt="天気アイコン"
            />
            <p className={styles.temperature}>
              {day.day.mintemp_c}°C ~ {day.day.maxtemp_c}°C
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
