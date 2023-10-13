import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
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

  loadLocationsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadLocationsData),
      switchMap(({ searchText }) =>
        this.openWeatherService.searchLocations(searchText).pipe(
          map((res: ILocation[]) => AppActions.loadLocationsDataSuccess({ data: res })),
          catchError((error) => {
            this.toastService.showError(error);
            return of(AppActions.loadLocationsDataFailure({ error }))
          }),
        )
      )
    )
  );

  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadWeatherData),
      switchMap(({ lat, lon }) =>
        this.openWeatherService.getWeather(lat, lon).pipe(
          map((res: IWeatherData) => {
            this.toastService.showSuccess('Weather data has been loaded successfully');
            return AppActions.loadWeatherDataSuccess({
              data: {
                ...res,
                daily: res.daily.slice(1, 6)
              }
            })
          }),
          catchError((error) => {
            this.toastService.showError(error);
            return of(AppActions.loadWeatherDataFailure({ error }))
          }),
        )
      )
    )
  );
}
