import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then((m) => m.WeatherModule),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}