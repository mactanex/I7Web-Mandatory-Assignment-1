import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseProgramService } from '../services/exercise-program.service';
import { AllPrograms } from './AllPrograms';

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

  allPrograms: AllPrograms = { allPrograms: [] };

  details(id: string) {
    this.router.navigateByUrl('detailExercise/' + id);
  }

  detailstemp() {
    this.router.navigateByUrl('detailExercise');
  }

  // get all exerciseprograms with exercises
  async ngOnInit() {
    console.log(this.allPrograms);
    this.allPrograms = await this.exerciseProgramService.getAllExercisesPrograms();
    console.log(this.allPrograms);
  }
}
