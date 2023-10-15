import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import * as AppActions from '../../store/app.actions';
import { ILocation, IWeatherData, IDailyForecast } from '../WeatherDTO';
import {
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

  selectedLocation$!: Observable<ILocation>;
  selectedLocationSubscription!: Subscription;
  weatherData$!: Observable<IWeatherData>;
  weatherDataSubscription!: Subscription;
  forcastDataSource = new MatTableDataSource<IDailyForecast>();
  displayedColumns: string[] = ['date', 'status', 'minTemp', 'maxTemp', 'humidity'];
  imgPath = `${WEATHER_BASE_URL}img/w/`;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.watchTheState();
  }

  watchTheState() {
    this.weatherData$ = this.store.pipe(select(selectWeatherData));
    this.weatherDataSubscription = this.weatherData$.subscribe((data) => {
      this.forcastDataSource.data = data?.daily;
    });

    this.selectedLocation$ = this.store.pipe(select(selectSelectedLocationData));
    this.selectedLocationSubscription = this.selectedLocation$.subscribe((data) => {
      this.store.dispatch(
        AppActions.loadWeatherData({
          lat: data.lat,
          lon: data.lon,
          numberOfDays: 5,
        })
      );
    });
  }

  roundTemp(value: number): number {
    return Math.round(value);
  }

  reverseSort() {
    this.forcastDataSource.data = this.forcastDataSource.data.slice().reverse();
  }

  ngOnDestroy(): void {
    this.weatherDataSubscription?.unsubscribe();
    this.selectedLocationSubscription?.unsubscribe();
  }
}
