import { Component, OnInit, OnDestroy } from '@angular/core';
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
    private exerciseProgramService: ExerciseProgramService
  ) {}
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
    this.navigationSubscription = this.router.events.subscribe(
      async (e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
          await this._init(false);
        }
      }
    );
  }

  private async _init(firstLoad = true) {
    const programNameFromUrl = (last(
      this.router.url.split('/')
    ) as string).split('%')[0];

    // console.log(programNameFromUrl);

    if (firstLoad) {
      if (!this.exerciseProgramService.allPrograms.allPrograms.length) {
        await this.exerciseProgramService.getAllExercisesPrograms();
      }
    } else {
      this.currentProgram.exerciseProgram = [];
      this.currentProgram = null;
      await this.exerciseProgramService.getAllExercisesPrograms();
    }

    this.exerciseProgramName = decodeURIComponent(programNameFromUrl);
    const exerciseProgram = this.exerciseProgramService.allPrograms.allPrograms.find(
      ep => ep.name === this.exerciseProgramName
    );

    this.currentProgram = exerciseProgram;
  }
}
