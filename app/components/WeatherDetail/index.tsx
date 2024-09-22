// types
import { WeatherData } from "@/app/types/weather";
// styles
import styles from "./styles.module.scss";

interface WeatherDetailProps {
  singleDayWeather?: WeatherData;
  date: string;
}

export default function WeatherDetail({
  singleDayWeather,
  date,
}: WeatherDetailProps) {
  return (
    <div className={styles.container}>
      {singleDayWeather && (
        <div className={styles.weatherInfo}>
          <h2>
            {singleDayWeather.location.name} {date}
          </h2>
          <section>
            <h3>気温</h3>
            <p>
              本日の最高気温:{" "}
              {singleDayWeather.forecast.forecastday[0].day.maxtemp_c}
              °C
            </p>
            <p>
              本日の最低気温:{" "}
              {singleDayWeather.forecast.forecastday[0].day.mintemp_c}
              °C
            </p>
            <p>
              平均気温: {singleDayWeather.forecast.forecastday[0].day.avgtemp_c}
              °C
            </p>
            <p>体感温度: {singleDayWeather.current.feelslike_c}°C</p>
          </section>
          <section>
            <h3>日の出と日の入り</h3>
            <p>
              日の出時刻:{" "}
              {singleDayWeather.forecast.forecastday[0].astro.sunrise}
            </p>
            <p>
              日の入り時刻:{" "}
              {singleDayWeather.forecast.forecastday[0].astro.sunset}
            </p>
          </section>
          <section>
            <h3>雲量と降水量</h3>
            <p>雲量: {singleDayWeather.current.cloud}%</p>
            <p>降水量: {singleDayWeather.current.precip_mm} ミリメートル</p>
            <p>降水量: {singleDayWeather.current.precip_in} インチ</p>
            <p>
              過去24時間の降水量:{" "}
              {singleDayWeather.forecast.forecastday[0].day.totalprecip_mm}{" "}
              ミリメートル
            </p>
          </section>
          <section>
            <h3>風情報</h3>
            <p>
              最大風速:{" "}
              {singleDayWeather.forecast.forecastday[0].day.maxwind_kph} km/h
            </p>
            <p>現在の風速: {singleDayWeather.current.wind_kph} km/h</p>
            <p>突風: {singleDayWeather.current.gust_kph} km/h</p>
            <p>風向: {singleDayWeather.current.wind_dir}</p>
          </section>
          <section>
            <h3>紫外線指数</h3>
            <p>紫外線指数: {singleDayWeather.current.uv}</p>
          </section>
          <section>
            <h3>湿度と気圧</h3>
            <p>
              平均湿度:{" "}
              {singleDayWeather.forecast.forecastday[0].day.avghumidity}%
            </p>
            <p>現在の湿度: {singleDayWeather.current.humidity}%</p>
            <p>露点: {singleDayWeather.current.dewpoint_c}°C</p>
            <p>気圧: {singleDayWeather.current.pressure_mb} hPa</p>
          </section>
          <section>
            <h3>視程</h3>
            <p>視程: {singleDayWeather.current.vis_km} km</p>
          </section>
          <section>
            <h3>月相情報</h3>
            <p>
              月相: {singleDayWeather.forecast.forecastday[0].astro.moon_phase}
            </p>
            <p>
              月光照射率:{" "}
              {singleDayWeather.forecast.forecastday[0].astro.moon_illumination}
              %
            </p>
            <p>
              次の月没時刻:{" "}
              {singleDayWeather.forecast.forecastday[0].astro.moonset}
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
