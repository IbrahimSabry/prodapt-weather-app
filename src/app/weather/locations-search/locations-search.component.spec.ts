import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSearchComponent } from './locations-search.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LocationsSearchComponent', () => {
  let component: LocationsSearchComponent;
  let fixture: ComponentFixture<LocationsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), SharedModule, BrowserAnimationsModule],
      declarations: [LocationsSearchComponent]
    });
    fixture = TestBed.createComponent(LocationsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
