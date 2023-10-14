import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LocationsReducer, SelectedLocationReducer, weatherReducer } from '../store/app.reducer';
import { WeatherEffects } from '../store/app.effects';



@NgModule({
  declarations: [
    ShowWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    StoreModule.forFeature('locations', LocationsReducer),
    StoreModule.forFeature('selectedLocation', SelectedLocationReducer),
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
  ]
})
export class WeatherModule { }
