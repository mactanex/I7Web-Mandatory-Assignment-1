import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ActivityService } from '../services/activity.service';
import { Log } from '../Models/Log';
import { Router } from '@angular/router';

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
    private bottomSheetRef: MatBottomSheetRef<LogactivitysheetComponent>,
    private activityService: ActivityService,
    private router: Router
  ) {}
  updateset(value: string) {
    this.sets = value;
  }

  IsNumeric = (e: any) => {
    const keyCode = e.keyCode === 0 ? e.charCode : e.keyCode;
    const ret = keyCode >= 48 && keyCode <= 57;
    return ret;
  }

  updatereps(value: string) {
    this.reps = value;
  }

  async saveactivity() {
    // tslint:disable-next-line:radix
    const newLog = new Log(parseInt(this.sets), this.reps);
    // call service to add this to activity
    this.bottomSheetRef.dismiss();
    await this.activityService.postActivity(
      this.data.ids.exerciseprogramid,
      this.data.ids.exerciseid,
      newLog
    );
    // not best practis should bind to data to update on its own.
    this.router.navigateByUrl('allexercise');
  }


  ngOnInit() {}
}
