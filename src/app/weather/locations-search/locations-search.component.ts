import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, debounceTime, filter } from 'rxjs';
import { ILocation } from '../WeatherDTO';
import { Store, select } from '@ngrx/store';
import {
  selectLocationsData,
  selectSelectedLocationData,
} from '../../store/app.selectors';
import * as AppActions from '../../store/app.actions';

@Component({
  selector: 'app-locations-search',
  templateUrl: './locations-search.component.html',
  styleUrls: ['./locations-search.component.scss']
})
export class LocationsSearchComponent implements OnInit, OnDestroy {

  searchInput = new FormControl();
  searchInputSubscription!: Subscription;
  locations$!: Observable<ILocation[]>;
  selectedLocation$!: Observable<ILocation>;
  selectedLocationSubscription!: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.watchTheState();
    this.searchTextSubscriber();
  }

  watchTheState() {
    this.locations$ = this.store.pipe(select(selectLocationsData));
    this.selectedLocation$ = this.store.pipe(select(selectSelectedLocationData));
    this.selectedLocationSubscription = this.selectedLocation$.subscribe((data) => {
      this.searchInput.patchValue(data?.name); //get the prvious selected location value from store
    });
  }

  searchTextSubscriber() {
    this.searchInputSubscription = this.searchInput.valueChanges.pipe(
      debounceTime(300), //wait 300 ms after the user enters each character
      filter((searchText) => !!searchText) //assure that the search input have value 
    ).subscribe((searchText) => {
      this.store.dispatch(AppActions.loadLocationsData({ searchText }));
    });
  }

  setSelectedLocation(location: ILocation): void {
    this.store.dispatch(AppActions.loadSelectedLocation({ data: location }));
  }

  ngOnDestroy(): void {
    this.searchInputSubscription?.unsubscribe();
    this.selectedLocationSubscription?.unsubscribe();
  }

}
