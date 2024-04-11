export interface WeatherApiResponse {
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        relative_humidity_2m: number;
        is_day: number;
        precipitation: number;
        weather_code: number;
        wind_speed_10m: number;
    };
}