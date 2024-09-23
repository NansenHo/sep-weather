"use client";

import { useState, useCallback, useMemo } from "react";
import { useAtom } from "jotai";

import { useWeatherForecast } from "@/app/hooks";
import { locationAtom } from "@/app/atoms";
import {
  WeatherHeader,
  CurrentWeather,
  TodayHourlyWeather,
  WeatherForecastList,
  Loading,
} from "@/app/components";

export default function App() {
  const [location, setLocation] = useAtom(locationAtom);
  const [inputLocation, setInputLocation] = useState(location);

  const now = new Date();
  const currentHour = now.getHours();

  const {
    data: weatherData,
    error,
    isLoading,
    mutate,
  } = useWeatherForecast(location, 10);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLocation(inputLocation);
      mutate();
    },
    [mutate, inputLocation, setLocation]
  );

  const handleLocationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputLocation(e.target.value);
    },
    [setInputLocation]
  );

  const weatherContent = useMemo(() => {
    if (isLoading) return <Loading />;
    if (error) return <div>{error.message}</div>;
    if (!weatherData) return null;

    return (
      <>
        <CurrentWeather weatherData={weatherData} />

        <TodayHourlyWeather
          todayHourlyWeather={weatherData.forecast.forecastday[0].hour}
          currentHour={currentHour}
        />

        <WeatherForecastList
          forecastDayWeather={weatherData.forecast.forecastday}
        />
      </>
    );
  }, [isLoading, error, weatherData]);

  return (
    <>
      <WeatherHeader
        value={inputLocation}
        handleSubmit={handleSubmit}
        handleLocationChange={handleLocationChange}
      />
      {weatherContent}
    </>
  );
}
