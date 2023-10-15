import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AppActions from './app.actions';
import { OpenWeatherService } from '../weather/open-weather.service';
import { ILocation, IWeatherData } from '../weather/WeatherDTO';
import { ToastService } from '../shared/toast.service';

@Injectable()
export class WeatherEffects {

  constructor(
    private actions$: Actions,
    private openWeatherService: OpenWeatherService,
    private toastService: ToastService,
  ) { }

// -------------------------------------------------- Locations Effect --------------------------------------------------

  // Effect for loading locations data
  loadLocationsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadLocationsData),
      switchMap(({ searchText }) => this.searchLocationsEffect(searchText))
    )
  );

  // Private method to encapsulate the search locations effect
  private searchLocationsEffect(searchText: string) {
    return this.openWeatherService.searchLocations(searchText).pipe(
      map((res: ILocation[]) => {
        return AppActions.loadLocationsDataSuccess({ data: res })
      }),
      catchError((error) => {
        this.toastService.showError(error);
        return of(AppActions.loadLocationsDataFailure({ error }))
      }),
    );
  }

  
// -------------------------------------------------- Weather Effect --------------------------------------------------

  // Effect for loading weather data
  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadWeatherData),
      switchMap(({ lat, lon, numberOfDays }) => this.loadWeatherEffect(lat, lon, numberOfDays))
    )
  );

  // Private method to encapsulate the load weather effect
  private loadWeatherEffect(lat: number, lon: number, numberOfDays: number) {
    return this.openWeatherService.getWeather(lat, lon).pipe(
      map((res: IWeatherData) => {
        this.toastService.showSuccess('Weather data has been loaded successfully');
        return AppActions.loadWeatherDataSuccess({
          data: {
            ...res,
            daily: res.daily.slice(1, numberOfDays + 1)
          }
        })
      }),
      catchError((error) => {
        this.toastService.showError(error);
        return of(AppActions.loadWeatherDataFailure({ error }))
      }),
    );
  }
}
