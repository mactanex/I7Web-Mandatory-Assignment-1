import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
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
  exercises: FormArray;

  constructor(private formBuilder: FormBuilder ) {
    // this is not viable
    this.exerciseprogramForm = this.formBuilder.group(
      {
        name: '',
        exercises: this.formBuilder.array([this.createExercise() ])
      });
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
