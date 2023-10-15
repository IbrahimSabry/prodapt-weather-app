import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeatherData, ILocation } from './WeatherDTO';
import *  as URLS from '../shared/URLS';

const WEATHER_API_KEY = 'abe1eb51289c21c167c66ce790c2fac3';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  // API call to search for location
  searchLocations(searchText: string): Observable<ILocation[]> {
    const params = {
      q: searchText,
      limit: 5,
      appid: WEATHER_API_KEY
    };
    return this.http.get<ILocation[]>(URLS.SEARCH_LOCATIONS, { params });
  }

  // API call to get weather data and forcast
  getWeather(lat: number, lon: number): Observable<IWeatherData> {
    const params = {
      lat: lat.toString(),
      lon: lon.toString(),
      exclude: 'hourly,minutely,alerts',
      units: 'metric',
      appid: WEATHER_API_KEY
    };

    return this.http.get<IWeatherData>(URLS.WEATHER_ONE_CALL, { params });
  }
}
