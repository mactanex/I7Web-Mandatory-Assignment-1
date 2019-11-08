import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { LogactivitysheetComponent } from '../logactivitysheet/logactivitysheet.component';
import { exerciseprogram } from '../Models/exerciseprogram';
import { exercise } from '../Models/exercise';

@Component({
  selector: 'app-detailexerciseprogram',
  templateUrl: './detailexerciseprogram.component.html',
  styleUrls: ['./detailexerciseprogram.component.css']
})
export class DetailexerciseprogramComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheet: MatBottomSheet) { }

  // exerciseno: any, exerciseprogramno: any get from list
  openActivitysheet(exerciseno: any, exerciseprogramno: any): void {
    this._bottomSheet.open(LogactivitysheetComponent, {
      data: {ids: [exerciseprogramno.id, exerciseno.id ]}
    });
  }

  ngOnInit() {
  }

}
