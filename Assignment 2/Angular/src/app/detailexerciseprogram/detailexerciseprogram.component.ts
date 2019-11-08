import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { LogactivitysheetComponent } from '../logactivitysheet/logactivitysheet.component';
import { exerciseprogram } from '../Models/exerciseprogram';
import { exercise } from '../Models/exercise';
import { Router } from '@angular/router';
import { last } from '../_Helpers/list-helpers';
import { ExerciseService } from '../services/exercise.service';
import { ExerciseProgramService } from '../services/exercise-program.service';

@Component({
  selector: 'app-detailexerciseprogram',
  templateUrl: './detailexerciseprogram.component.html',
  styleUrls: ['./detailexerciseprogram.component.css']
})
export class DetailexerciseprogramComponent implements OnInit {
  exerciseProgramName: any;
  currentProgram: exerciseprogram;

  constructor(
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private exerciseProgramService: ExerciseProgramService
  ) {}

  openActivitysheet(exerciseno: any, exerciseprogramno: any): void {
    this.bottomSheet.open(LogactivitysheetComponent, {
      data: { ids: [exerciseprogramno._id, exerciseno._id] }
    });
  }

  async ngOnInit() {
    if (!this.exerciseProgramService.allPrograms.allPrograms.length) {
      await this.exerciseProgramService.getAllExercisesPrograms();
    }
    this.exerciseProgramName = decodeURIComponent(
      last(this.router.url.split('/'))
    );
    const exerciseProgram = this.exerciseProgramService.allPrograms.allPrograms.find(
      ep => ep.name === this.exerciseProgramName
    );
    this.currentProgram = exerciseProgram;
  }
}
