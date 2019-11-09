import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSuccessSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 4000,
      panelClass: ['green-bg'],
    });
  }

  openFailureSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 4000,
      panelClass: ['red-bg'],
    });
  }
}
