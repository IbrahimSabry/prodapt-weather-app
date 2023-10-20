import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeatherComponent } from './show-weather.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationsSearchComponent } from '../locations-search/locations-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShowWeatherComponent', () => {
  let component: ShowWeatherComponent;
  let fixture: ComponentFixture<ShowWeatherComponent>;

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
});
