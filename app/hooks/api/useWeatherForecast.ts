// libraries
import useSWR from "swr";
// utils
import { weatherapiFetcher } from "@/app/utils/weatherapiFetcher";
// types
import { WeatherData } from "@/app/types/weather";

export function useWeatherForecast(q: string, days: number, dt: string = "") {
  const { data, error, isLoading, mutate } = useSWR<WeatherData, Error>(
    ["weatherDataByLocation", q, dt],
    () =>
      weatherapiFetcher<WeatherData>("forecast.json", {
        q,
        days,
        dt,
      }),
    {}
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}
