import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IWeatherData, IDailyForecast, ILocation } from '../WeatherDTO';
import { Observable, Subscription, debounceTime, filter, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app.actions';
import { selectLocationsData, selectSelectedLocationData, selectWeatherData } from '../../store/app.selectors';
import { select } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnDestroy {

  searchInput = new FormControl();
  locations$!: Observable<ILocation[]>;
  selectedLocation$!: Observable<ILocation>;
  weatherData$!: Observable<IWeatherData>;
  searchLocationSubscription!: Subscription;
  selectedLocationSubscription!: Subscription;
  weatherSubscription!: Subscription;
  forcastDataSource = new MatTableDataSource<IDailyForecast>();
  displayedColumns: string[] = ['date', 'status', 'minTemp', 'maxTemp', 'humidity'];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.watchTheState();
    this.searchTextSubscriber();
    this.weatherSubscription = this.weatherData$.subscribe(data => {
      this.forcastDataSource.data = data?.daily;
    });
  }

  watchTheState() {
    this.locations$ = this.store.pipe(select(selectLocationsData));
    this.weatherData$ = this.store.pipe(select(selectWeatherData));
    this.selectedLocation$ = this.store.pipe(select(selectSelectedLocationData))
    this.selectedLocationSubscription = this.selectedLocation$.subscribe(data => {
      this.searchInput.patchValue(data?.name)
    })
  }

  searchTextSubscriber() {
    this.searchLocationSubscription = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      filter((searchText) => !!searchText)
    ).subscribe((searchText) =>
      this.store.dispatch(AppActions.loadLocationsData({ searchText })),
    );
  }

  getWeather(location: ILocation): void {
    this.store.dispatch(AppActions.loadSelectedLocation({data: location})),
    this.store.dispatch(AppActions.loadWeatherData({ lat: location.lat, lon: location.lon, numberOfDays: 5 }));
  }

  reverseSort() {
    this.forcastDataSource.data = this.forcastDataSource.data.slice().reverse();
  }

  ngOnDestroy(): void {
    this.searchLocationSubscription.unsubscribe();
    this.selectedLocationSubscription.unsubscribe();
    this.weatherSubscription.unsubscribe();
  }

}
