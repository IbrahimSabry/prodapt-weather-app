import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { initialAppState } from './app.store';


export const LocationsReducer = createReducer(
  initialAppState,
  on(AppActions.loadLocationsData, state => ({
    ...state,
    error: null,
    loading: true
  })),
  on(AppActions.loadLocationsDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false
  })),
  on(AppActions.loadLocationsDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

export const SelectedLocationReducer = createReducer(
  initialAppState,
  on(AppActions.loadSelectedLocation, (state, { data }) => ({
    ...state,
    data: data,
  }))
);

export const weatherReducer = createReducer(
  initialAppState,
  on(AppActions.loadWeatherData, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AppActions.loadWeatherDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false
  })),
  on(AppActions.loadWeatherDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);