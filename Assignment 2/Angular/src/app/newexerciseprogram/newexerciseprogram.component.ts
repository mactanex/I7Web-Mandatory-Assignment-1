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

  constructor(private formBuilder: FormBuilder ) {
    this.exerciseprogramForm = this.formBuilder.group(
      {
        name: [''],
        exercise: [exercise]
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
