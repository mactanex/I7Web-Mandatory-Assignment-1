import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ExerciseErrorStateMatcher } from '../Errorhandling/ExerciseErrorStateMatcher';
import { exerciseprogram } from '../Models/exerciseprogram';
import { exercise } from '../Models/exercise';

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

  constructor(private formBuilder: FormBuilder ) {
    // this is not viable
    this.exerciseprogramForm = this.formBuilder.group(
      {
        name: [''],
        exercisename: [this.exercise.name],
        exercisedesc: [this.exercise.description],
        exerciseset: [this.exercise.set],
        exercisereps: [this.exercise.repsOrtime]
      });
   }

   newExerciseprogram() {
    this.value = true;
    this.exerciseprogramtemp.exercises.push(new exercise());
  }

  addExercise() {
    this.exerciseprogramtemp.exercises.push(new exercise());
  }

  saveexerciseprogram() {
  console.log(this.exerciseprogramtemp);
  }

  ngOnInit() {
  }

}
