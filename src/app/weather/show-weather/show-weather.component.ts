import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OpenWeatherService } from '../open-weather.service';
import { IWeatherData, ILocation } from '../WeatherDTO';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {

  searchInput = new FormControl();

  filteredLocations$!: Observable<ILocation[]>;

  weatherData$!: Observable<IWeatherData>;

  constructor(private weatherService: OpenWeatherService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.searchForLocation();
  }

  searchForLocation() {
    this.filteredLocations$ = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      filter((searchText) => !!searchText),
      switchMap((searchText) => this.weatherService.searchLocations(searchText).pipe(
        catchError((error) => {
          this.showError(error);
          return [];
        }))
    ));
  }

  getWeather(event: MatAutocompleteSelectedEvent): void {
    const selectedLocation: ILocation = event.option.value;

    this.weatherData$ = this.weatherService.getWeather(selectedLocation.lat, selectedLocation.lon).pipe(
      map((data: IWeatherData) => ({
        ...data,
        daily: data.daily.slice(1, 6)
      }))
    )
  }

  displayFn(option: ILocation): string {
    return option ? option.name : '';
  }

  showError(errorMessage: string) {
    this.snackBar.open(errorMessage, 'Close', {
      duration: 5000,
    });
  }
}
