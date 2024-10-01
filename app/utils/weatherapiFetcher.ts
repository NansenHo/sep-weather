import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_API_BASE_URL;

if (!API_KEY) throw new Error("API_KEY is not defined");
if (!BASE_URL) throw new Error("BASE_URL is not defined");

interface Params {
  key: string;
  q: string;
  days?: number;
  dt?: string;
  unixdt?: number;
  end_dt?: string;
  unixend_dt?: number;
  hour?: number;
  alerts?: string;
  aqi?: string;
  tides?: string;
  tp?: number;
  current_fields?: string;
  day_fields?: string;
  hour_fields?: string;
  solar?: string;
  et0?: string;
  wind100mph?: string;
  wind100kph?: string;
  lang?: string;
}

export const weatherapiFetcher = async <T>(
  endpoint: string,
  params: Omit<Params, "key">
): Promise<T> => {
  const response = await axios.get(`${BASE_URL}/${endpoint}`, {
    params: {
      key: API_KEY,
      ...params,
    },
  });
  return response.data;
};
