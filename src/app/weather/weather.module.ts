import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShowWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule
  ]
})
export class WeatherModule { }
