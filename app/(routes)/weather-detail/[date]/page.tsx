"use client";

// libraries
import { useParams, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { useAtom } from "jotai";
// hooks
import { useWeatherForecast } from "@/app/hooks/api/useWeatherForecast";
// atoms
import { locationAtom } from "@/app/atoms";
// components
import WeatherHeader from "@/app/components/WeatherHeader";
import WeatherDetail from "@/app/components/WeatherDetail";
import Loading from "@/app/components/Loading";

export default function WeatherDetailPage() {
  const [location, setLocation] = useAtom(locationAtom);
  const [inputLocation, setInputLocation] = useState(location);

  const params = useParams();
  const router = useRouter();

  const {
    data: singleDayWeather,
    isLoading,
    error,
  } = useWeatherForecast(location, 0, params.date as string);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setLocation(inputLocation);
      router.push("/");
    },
    [router, setLocation, inputLocation]
  );

  const handleLocationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputLocation(e.target.value);
    },
    [setInputLocation]
  );

  return (
    <div>
      <WeatherHeader
        value={inputLocation}
        handleSubmit={handleSubmit}
        handleLocationChange={handleLocationChange}
      />

      {isLoading && <Loading />}

      {error && <div>{error.message}</div>}

      <WeatherDetail
        singleDayWeather={singleDayWeather}
        date={params.date as string}
      />
    </div>
  );
}