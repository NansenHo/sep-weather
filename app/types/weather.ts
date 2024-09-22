export interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    gust_kph: number;
    wind_dir: string;
    humidity: number;
    dewpoint_c: number;
    pressure_mb: number;
    vis_km: number;
    cloud: number;
    uv: number;
    gust_mph: number;
    precip_mm: number;
    precip_in: number;
    precip_kph: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        maxwind_kph: number;
        avghumidity: number;
        uv: number;
        condition: {
          text: string;
          icon: string;
        };
        daily_chance_of_rain: number;
        daily_chance_of_snow: number;
        totalprecip_mm: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
        moon_phase: string;
        moon_illumination: number;
        moonset: string;
      };
      hour: Array<{
        time: string;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      }>;
    }>;
  };
}
