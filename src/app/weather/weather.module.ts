import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    ShowWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
