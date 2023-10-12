import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OpenWeatherService } from '../open-weather.service';
import { IForecastData, ILocation, IWeatherData } from '../WeatherDTO';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {

  searchInput = new FormControl();

  currentWeather!: IWeatherData

  fiveDayForcast!: IForecastData;

  location!: ILocation;

  filteredOptions!: Observable<ILocation[]>;

  constructor(private weatherService: OpenWeatherService) {
 
  }

  ngOnInit(): void {
    this.filteredOptions = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string) => this.weatherService.searchLocations(this.searchInput.value))
    );
  }

  search() {
    this.weatherService.searchLocations(this.searchInput.value).subscribe(res => {
      this.location = res[0]
    })

  }

  getWeather(event: MatAutocompleteSelectedEvent): void {
    const selectedLocation : ILocation = event.option.value;
    this.searchInput.patchValue(selectedLocation.name);

    this.weatherService.getCurrentWeather(selectedLocation.lat, selectedLocation.lon).subscribe(res => {
      this.currentWeather = res;
    })
    this.weatherService.getFiveDayForecast(selectedLocation.lat, selectedLocation.lon).subscribe(res => {
      this.fiveDayForcast = res;
    })
  }

}
