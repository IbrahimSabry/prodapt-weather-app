export interface IWeatherData {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: ICurrentWeather;
    daily: IDailyForecast[];
}

interface ICurrentWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: IWeatherCondition[];
    rain: {
        '1h': number;
    };
}

interface IDailyForecast {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: ITemperature;
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    };
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: IWeatherCondition[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}

interface ITemperature {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

interface IWeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}


export interface ILocation {
    name: string;
    local_names: { [key: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
}