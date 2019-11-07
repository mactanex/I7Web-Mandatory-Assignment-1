import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

export class exerciseprogram {
  name: string;
  exercises = new Array<exercise>();
}

export class exercise {
  name: string;
  description: string;
  set: number;
  repsOrtime: string;
  activities: Log;
}

export class Log {
  activity: string;
}

@Component({
  selector: 'app-newexerciseprogram',
  templateUrl: './newexerciseprogram.component.html',
  styleUrls: ['./newexerciseprogram.component.css']
})

export class NewexerciseprogramComponent implements OnInit {
  value = false;
  exerciseprogramtemp = new exerciseprogram();
  exerciseprogramForm: FormGroup;
  matcher = new LoginErrorStateMatcher();

  constructor(private formBuilder: FormBuilder ) {
    this.exerciseprogramForm = this.formBuilder.group(
      {
        name: [''],
        exercise: [exercise]
      });
   }

   newExerciseprogram() {
    this.value = true;
  }

  addexerciseprogram() {
  console.log(this.exerciseprogramtemp);
  }

  ngOnInit() {
  }

}
