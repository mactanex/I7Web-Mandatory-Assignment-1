import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseProgramService } from '../services/exercise-program.service';
import { AllPrograms } from '../Models/AllPrograms';

@Component({
  selector: 'app-allexercise',
  templateUrl: './allexercise.component.html',
  styleUrls: ['./allexercise.component.css']
})
export class AllexerciseComponent implements OnInit {
  constructor(
    private router: Router,
    private exerciseProgramService: ExerciseProgramService
  ) {}

  // tslint:disable-next-line:max-line-length
  allPrograms: AllPrograms = { allPrograms: [] }; // because the result is not a list of exercisePrograms but rather a DTO containing a list of said.

  details(id: string) {
    this.router.navigateByUrl('detailExercise/' + id);
  }

  detailstemp() {
    this.router.navigateByUrl('detailExercise');
  }

  // get all exerciseprograms with exercises
  async ngOnInit() {
    this.allPrograms = await this.exerciseProgramService.getAllExercisesPrograms();
  }
}
