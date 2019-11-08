import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-logactivitysheet',
  templateUrl: './logactivitysheet.component.html',
  styleUrls: ['./logactivitysheet.component.css']
})
export class LogactivitysheetComponent implements OnInit {
  sets = '';
  reps = '';
  // tslint:disable-next-line: variable-name
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private _bottomSheetRef: MatBottomSheetRef<LogactivitysheetComponent>, ) { }
  updateset(value: string) {
    this.sets = value; }

  updatereps(value: string) {
     this.reps = value;
    }
    // data.ids. each passed in service call
  saveactivity() {
    console.log(this.sets + ' ' + this.reps);
    // call service to add this to activity
  }

  ngOnInit() {
  }

}
