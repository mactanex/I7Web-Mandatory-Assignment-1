import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSliderModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatIconModule,
  MatGridListModule,
  MatStepperModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatGridListModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule
  ],
  exports: [
    MatSliderModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
