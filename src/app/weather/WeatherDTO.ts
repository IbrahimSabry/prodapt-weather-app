export interface ICoordinates {
    lat: number;
    lon: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IMainWeatherInfo {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
}

export interface IWindInfo {
    speed: number;
    deg: number;
    gust: number;
}

export interface IRainInfo {
    '1h': number;
}

export interface ICloudInfo {
    all: number;
}

export interface ISystemInfo {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface IWeatherData {
    coord: ICoordinates;
    weather: IWeather[];
    base: string;
    main: IMainWeatherInfo;
    visibility: number;
    wind: IWindInfo;
    rain: IRainInfo;
    clouds: ICloudInfo;
    dt: number;
    sys: ISystemInfo;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}








export interface ICity {
    id: number;
    name: string;
    coord: ICoordinates;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface IForecastItem {
    dt: number;
    main: IMainWeatherInfo;
    weather: IWeather[];
    clouds: ICloudInfo;
    wind: IWindInfo;
    visibility: number;
    pop: number;
    rain: IRainInfo;
    sys: ISysInfo;
    dt_txt: string;
}

export interface ISysInfo {
    pod: string;
}

export interface IForecastData {
    cod: string;
    message: number;
    cnt: number;
    list: IForecastItem[];
    city: ICity;
}


export interface ILocation {
    name: string;
    local_names: { [key: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
  }