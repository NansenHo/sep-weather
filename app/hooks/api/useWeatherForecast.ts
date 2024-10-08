import useSWR from "swr";

import { weatherapiFetcher } from "@/app/utils";
import type { WeatherData } from "@/app/types";

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
