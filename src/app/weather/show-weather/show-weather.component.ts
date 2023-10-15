import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import * as AppActions from '../../store/app.actions';
import { ILocation, IWeatherData, IDailyForecast } from '../WeatherDTO';
import {
  selectLocationsData,
  selectSelectedLocationData,
  selectWeatherData,
} from '../../store/app.selectors';
import { WEATHER_BASE_URL } from '../../shared/URLS';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss'],
})
export class ShowWeatherComponent implements OnInit, OnDestroy {
  
  searchInput = new FormControl();
  locations$!: Observable<ILocation[]>;
  selectedLocation$!: Observable<ILocation>;
  weatherData$!: Observable<IWeatherData>;
  searchLocationSubscription!: Subscription;
  selectedLocationSubscription!: Subscription;
  weatherSubscription!: Subscription;
  forcastDataSource = new MatTableDataSource<IDailyForecast>();
  displayedColumns: string[] = ['date', 'status', 'minTemp', 'maxTemp', 'humidity'];
  imgPath = `${WEATHER_BASE_URL}img/w/`;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.watchTheState();
    this.searchTextSubscriber();
    this.weatherSubscription = this.weatherData$.subscribe((data) => {
      this.forcastDataSource.data = data?.daily;
    });
  }

  watchTheState() {
    this.locations$ = this.store.pipe(select(selectLocationsData));
    this.weatherData$ = this.store.pipe(select(selectWeatherData));
    this.selectedLocation$ = this.store.pipe(select(selectSelectedLocationData));
    this.selectedLocationSubscription = this.selectedLocation$.subscribe((data) => {
      this.searchInput.patchValue(data?.name);
    });
  }

  searchTextSubscriber() {
    this.searchLocationSubscription = this.searchInput.valueChanges
      .pipe(debounceTime(300), filter((searchText) => !!searchText))
      .subscribe((searchText) => {
        this.store.dispatch(AppActions.loadLocationsData({ searchText }));
      });
  }

  getWeather(location: ILocation): void {
    this.store.dispatch(AppActions.loadSelectedLocation({ data: location }));
    this.store.dispatch(
      AppActions.loadWeatherData({
        lat: location.lat,
        lon: location.lon,
        numberOfDays: 5,
      })
    );
  }

  roundTemp(value: number): number {
    return Math.round(value);
  }
  
  reverseSort() {
    this.forcastDataSource.data = this.forcastDataSource.data.slice().reverse();
  }

  ngOnDestroy(): void {
    this.searchLocationSubscription?.unsubscribe();
    this.selectedLocationSubscription?.unsubscribe();
    this.weatherSubscription?.unsubscribe();
  }
}
