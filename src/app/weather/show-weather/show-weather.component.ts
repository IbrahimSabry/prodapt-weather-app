import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OpenWeatherService } from '../open-weather.service';
import { IWeatherData, ILocation } from '../WeatherDTO';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {

  searchInput = new FormControl();

  filteredLocations$!: Observable<ILocation[]>;

  weatherData$!: Observable<IWeatherData>;

  constructor(private weatherService: OpenWeatherService) { }

  ngOnInit(): void {
    this.searchForLocation();
  }

  searchForLocation() {
    this.filteredLocations$ = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      switchMap(() => this.weatherService.searchLocations(this.searchInput.value))
    );
  }

  getWeather(event: MatAutocompleteSelectedEvent): void {
    const selectedLocation: ILocation = event.option.value;
    this.searchInput.patchValue(selectedLocation.name);

    this.weatherData$ = this.weatherService.getWeather(selectedLocation.lat, selectedLocation.lon).pipe(
      map((data: IWeatherData) => ({
        ...data,
        daily: data.daily.slice(1, 6)
      }))
    )
  }
}
