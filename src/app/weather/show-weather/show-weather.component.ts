import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IWeatherData, ILocation } from '../WeatherDTO';
import { Observable, Subscription, debounceTime, filter, tap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app.actions';
import { selectLocationsData, selectWeatherData } from '../../store/app.selectors';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnDestroy {

  searchInput = new FormControl();

  searchLocationSubscription!: Subscription;

  filteredLocations$!: Observable<ILocation[]>;

  weatherData$!: Observable<IWeatherData>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.watchTheState();
    this.searchTextSubscriber();
  }

  watchTheState(){
    this.filteredLocations$ = this.store.pipe(select(selectLocationsData));
    this.weatherData$ = this.store.pipe(select(selectWeatherData));
  }

  searchTextSubscriber() {
    this.searchLocationSubscription = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      filter((searchText) => !!searchText),
      tap((searchText) =>
        this.store.dispatch(AppActions.loadLocationsData({ searchText })),
      )).subscribe();
  }

  getWeather(event: MatAutocompleteSelectedEvent): void {
    const location: ILocation = event.option.value;
    this.store.dispatch(AppActions.loadWeatherData({ lat: location.lat, lon: location.lon }));
  }

  displayLocationName(option: ILocation): string {
    return option ? option.name : '';
  }

  ngOnDestroy(): void {
    this.searchLocationSubscription.unsubscribe()
  }
}
