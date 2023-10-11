import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

const routes: Routes = [{
  path: '', component: ShowWeatherComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
