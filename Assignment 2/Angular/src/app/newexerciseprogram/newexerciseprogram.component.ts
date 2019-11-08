import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ExerciseErrorStateMatcher } from '../Errorhandling/ExerciseErrorStateMatcher';
import { exerciseprogram } from '../Models/exerciseprogram';
import { exercise } from '../Models/exercise';
import { ExerciseProgramService } from '../services/exercise-program.service';

@Component({
  selector: 'app-newexerciseprogram',
  templateUrl: './newexerciseprogram.component.html',
  styleUrls: ['./newexerciseprogram.component.css']
})
export class NewexerciseprogramComponent implements OnInit {
  value = false;
  exerciseprogramtemp = new exerciseprogram();
  exerciseprogramForm: FormGroup;
  matcher = new ExerciseErrorStateMatcher();
  exercise = new exercise();
  exercises: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private exerciseProgramService: ExerciseProgramService
  ) {
    // this is not viable
  }

  createExercise(): FormGroup {
    return this.formBuilder.group({
      exercisename: '',
      exercisedesc: '',
      exerciseset: 0,
      exercisereps: ''
    });
  }

  newExerciseprogram() {
    this.value = true;
  }

  addExercise() {
    this.exercises = this.exerciseprogramForm.get('exercises') as FormArray;
    this.exercises.push(this.createExercise());
  }

  async saveexerciseprogram() {
    this.exerciseprogramtemp.name = this.exerciseprogramForm.value.name;
    this.exercises = this.exerciseprogramForm.get('exercises') as FormArray;
    const exercisesGenerated = this.exercises.controls.map(
      c =>
        new exercise(
          c.value.exercisename,
          c.value.exercisedesc,
          c.value.exerciseset,
          c.value.exercisereps
        )
    );
    // console.log(exercisesGenerated);
    exercisesGenerated.forEach(x => {
      this.exerciseprogramtemp.exerciseProgram.push(x);
    });
    try {
      await this.exerciseProgramService.postExerciseProgram(
        this.exerciseprogramtemp
      );
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    this.exerciseprogramForm = this.formBuilder.group({
      name: '',
      exercises: this.formBuilder.array([this.createExercise()])
    });
  }
}
