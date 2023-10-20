import { TestBed } from '@angular/core/testing';

import { OpenWeatherService } from './open-weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('OpenWeatherService', () => {
  let service: OpenWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OpenWeatherService],
    });
    service = TestBed.inject(OpenWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
