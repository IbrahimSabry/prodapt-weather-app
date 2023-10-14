import { createAction, props } from '@ngrx/store';
import { ILocation, IWeatherData } from '../weather/WeatherDTO';

export const loadLocationsData = createAction('[Locations] Load Data',  props<{ searchText: string }>());
export const loadLocationsDataSuccess = createAction('[Locations] Load Data Success', props<{ data: ILocation[] }>());
export const loadLocationsDataFailure = createAction('[Locations] Load Data Failure', props<{ error: any }>());
export const loadSelectedLocation = createAction('[SelectedLocation] Load Data', props<{data: ILocation}>());

export const loadWeatherData = createAction('[Weather] Load Data',  props<{ lat: number; lon: number, numberOfDays: number }>());
export const loadWeatherDataSuccess = createAction('[Weather] Load Data Success', props<{ data: IWeatherData }>());
export const loadWeatherDataFailure = createAction('[Weather] Load Data Failure', props<{ error: any }>());
