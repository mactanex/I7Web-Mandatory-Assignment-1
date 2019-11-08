import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ActivityService } from '../services/activity.service';
import { Log } from '../Models/Log';

@Component({
  selector: 'app-logactivitysheet',
  templateUrl: './logactivitysheet.component.html',
  styleUrls: ['./logactivitysheet.component.css']
})
export class LogactivitysheetComponent implements OnInit {
  sets = '';
  reps = '';
  // tslint:disable-next-line: variable-name
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { ids: { exerciseprogramid: string; exerciseid: string } },
    private _bottomSheetRef: MatBottomSheetRef<LogactivitysheetComponent>,
    private activityService: ActivityService
  ) {}
  updateset(value: string) {
    this.sets = value;
  }

  updatereps(value: string) {
    this.reps = value;
  }
  // data.ids. each passed in service call
  async saveactivity() {
    // tslint:disable-next-line:radix
    const newLog = new Log(parseInt(this.sets), this.reps);
    console.log(this.sets + ' ' + this.reps);
    // call service to add this to activity
    await this.activityService.postActivity(
      this.data.ids.exerciseprogramid,
      this.data.ids.exerciseid,
      newLog
    );
  }

  ngOnInit() {}
}
