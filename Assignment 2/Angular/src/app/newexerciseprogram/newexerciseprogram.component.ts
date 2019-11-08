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
    /* this.exerciseprogramtemp.exercises.push(new exercise()); */
  }

  addExercise() {
    this.exercises = this.exerciseprogramForm.get('exercises') as FormArray;
    this.exercises.push(this.createExercise());
    /*  this.exerciseprogramForm.controls.exercises.value.push(this.createExercise()); */
    /* this.exerciseprogramtemp.exercises.push(new exercise()); */
  }

  async saveexerciseprogram() {
    this.exerciseprogramtemp.name = this.exerciseprogramForm.value.name;
    this.exercises = this.exerciseprogramForm.get('exercises') as FormArray;
    const exercisesGenerated = this.exercises.controls.map(c => {
      console.log(c);
      return new exercise(
        c.value.exercisename,
        c.value.exercisedesc,
        c.value.exerciseset,
        c.value.exercisereps
      );
    });
    console.log(exercisesGenerated);
    exercisesGenerated.forEach(x => {
      this.exerciseprogramtemp.exerciseProgram.push(x);
    });
    // remove this console.log and replace with call to backend
    console.log(this.exerciseprogramtemp);
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
