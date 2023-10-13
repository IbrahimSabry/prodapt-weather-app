import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.store';

const selectLocationsState = createFeatureSelector<AppState>('locations');

export const selectLocationsData = createSelector(
  selectLocationsState,
  (state) => state.data
);

const selectWeatherState = createFeatureSelector<AppState>('weather');

export const selectWeatherData = createSelector(
  selectWeatherState,
  (state) => state.data
);
