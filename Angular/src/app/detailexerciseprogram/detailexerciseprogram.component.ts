import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { LogactivitysheetComponent } from '../logactivitysheet/logactivitysheet.component';
import { exerciseprogram } from '../Models/exerciseprogram';
import { exercise } from '../Models/exercise';
import { Router, NavigationEnd } from '@angular/router';
import { last } from '../_Helpers/list-helpers';
import { ExerciseService } from '../services/exercise.service';
import { ExerciseProgramService } from '../services/exercise-program.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailexerciseprogram',
  templateUrl: './detailexerciseprogram.component.html',
  styleUrls: ['./detailexerciseprogram.component.css']
})
export class DetailexerciseprogramComponent implements OnInit, OnDestroy {
  constructor(
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private exerciseProgramService: ExerciseProgramService,
    private cdr: ChangeDetectorRef
  ) {
  }
  exerciseProgramName: any;
  currentProgram: exerciseprogram;
  navigationSubscription: Subscription;
  ngOnDestroy(): void {
    if (this.navigationSubscription != null) {
      this.navigationSubscription.unsubscribe();
    }
  }

  openActivitysheet(exerciseno: any, exerciseprogramno: any): void {
    this.bottomSheet.open(LogactivitysheetComponent, {
      data: {
        ids: {
          exerciseprogramid: exerciseprogramno._id,
          exerciseid: exerciseno._id
        }
      }
    });
  }

  async ngOnInit() {
    await this._init();
  }

  private async _init() {
    const programNameFromUrl = last(this.router.url.split('/'));

    if (!this.exerciseProgramService.allPrograms.allPrograms.length) {
      await this.exerciseProgramService.getAllExercisesPrograms();
    }

    this.exerciseProgramName = decodeURIComponent(programNameFromUrl as string);
    const exerciseProgram = this.exerciseProgramService.allPrograms.allPrograms.find(
      ep => ep.name === this.exerciseProgramName
    );

    this.currentProgram = exerciseProgram;
  }
}
