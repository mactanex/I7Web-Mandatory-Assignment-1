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

  updatereps(value: string) {
    this.reps = value;
  }

  async saveactivity() {
    // tslint:disable-next-line:radix
    const newLog = new Log(parseInt(this.sets), this.reps);
    // console.log(this.sets + ' ' + this.reps);
    // call service to add this to activity
    await this.activityService.postActivity(
      this.data.ids.exerciseprogramid,
      this.data.ids.exerciseid,
      newLog
    );
    this.bottomSheetRef.dismiss();
    this.redirectTo(this.router.url);
  }

  // In an attempt to force refresh the component when adding activity...
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([uri], { queryParams: { refresh: 1 } });
    });
  }

  // In an attempt to force refresh the component when adding activity...
  randomParam = () =>
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)

  ngOnInit() {}
}
