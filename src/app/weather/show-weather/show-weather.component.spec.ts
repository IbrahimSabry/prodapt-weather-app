import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeatherComponent } from './show-weather.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationsSearchComponent } from '../locations-search/locations-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IDailyForecast } from '../WeatherDTO';

describe('ShowWeatherComponent', () => {
  let component: ShowWeatherComponent;
  let fixture: ComponentFixture<ShowWeatherComponent>;
  const sampleWeatherData: IDailyForecast[] = [
    { humidity: 1 },
    { humidity: 2 },
    { humidity: 3 }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), SharedModule, BrowserAnimationsModule],
      declarations: [ShowWeatherComponent, LocationsSearchComponent]
    });
    fixture = TestBed.createComponent(ShowWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should round a temperature value', () => {
    const inputTemp = 22.7;
    const roundedTemp = component.roundTemp(inputTemp);

    expect(roundedTemp).toBe(23);
  });

  it('Should reverse an array items', () => {
    component.forcastDataSource.data = sampleWeatherData;
    component.reverseSort()
    expect(component.forcastDataSource.data).toEqual([
      { humidity: 3 },
      { humidity: 2 },
      { humidity: 1 }
    ])
  })

});
