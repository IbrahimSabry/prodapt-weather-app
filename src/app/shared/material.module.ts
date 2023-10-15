import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
  ],
  exports:[  
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatSortModule
  ]
})
export class MaterialModule { }
