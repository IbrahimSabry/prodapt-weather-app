import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IWeatherData, IDailyForecast, ILocation } from '../WeatherDTO';
import { Observable, Subscription, debounceTime, filter, map, tap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app.actions';
import { selectLocationsData, selectWeatherData } from '../../store/app.selectors';
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

  selectedLocation!: ILocation

  weatherData$!: Observable<IWeatherData>;

  forcastDataSource = new MatTableDataSource<IDailyForecast>();

  displayedColumns: string[] = ['date', 'minTemp', 'maxTemp'];

  searchLocationSubscription!: Subscription;

  weatherSubscription!: Subscription;

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
  }

  searchTextSubscriber() {
    this.searchLocationSubscription = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      filter((searchText) => !!searchText)
    ).subscribe((searchText) =>
      this.store.dispatch(AppActions.loadLocationsData({ searchText })),
    );
  }

  getWeather(event: MatAutocompleteSelectedEvent): void {
    this.selectedLocation = event.option.value;
    this.store.dispatch(AppActions.loadWeatherData({ lat: this.selectedLocation.lat, lon: this.selectedLocation.lon, numberOfDays: 5 }));
  }

  displayLocationName(option: ILocation): string {
    return option ? option.name : '';
  }

  reverseSort() {
    this.forcastDataSource.data = this.forcastDataSource.data.slice().reverse();
  }

  ngOnDestroy(): void {
    this.searchLocationSubscription.unsubscribe();
    this.weatherSubscription.unsubscribe();
  }
}
