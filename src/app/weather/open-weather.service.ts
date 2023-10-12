import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeatherData, ILocation } from './WeatherDTO';


const baseUrl = 'https://api.openweathermap.org/';
const apiKey = 'abe1eb51289c21c167c66ce790c2fac3';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  // API call for search for location
  searchLocations(searchText: string): Observable<ILocation[]> {
    const params = {
      q: searchText,
      limit: 5,
      appid: apiKey
    };
    const url = `${baseUrl}geo/1.0/direct`;
    return this.http.get<ILocation[]>(url, { params });
  }

  // API call to get weather data and forcast
  getWeather(lat: number, lon: number): Observable<IWeatherData> {
    const params = {
      lat: lat.toString(),
      lon: lon.toString(),
      exclude: 'hourly,minutely,alerts',
      units: 'metric',
      appid: apiKey
    };

    return this.http.get<IWeatherData>(`${baseUrl}data/2.5/onecall`, { params });
  }
}
