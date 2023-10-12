import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity, IForecastData, ILocation, IWeatherData } from './WeatherDTO';


const baseUrl = 'https://api.openweathermap.org/';
const apiKey = 'abe1eb51289c21c167c66ce790c2fac3';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  // API call for search for location
  searchLocations(searchText: string): Observable<ILocation[]>{
    const url = `${baseUrl}geo/1.0/direct?q=${searchText}&limit=5&appid=${apiKey}`;
    return this.http.get<ILocation[]>(url);
  }

  // API call for current weather
  getCurrentWeather(lat: number, lon : number): Observable<IWeatherData> {
    const url = `${baseUrl}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return this.http.get<IWeatherData>(url);
  }

  // API call for 5-day forecast
  getFiveDayForecast(lat: number, lon : number): Observable<IForecastData> {
    const url = `${baseUrl}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return this.http.get<IForecastData>(url);
  }
}
