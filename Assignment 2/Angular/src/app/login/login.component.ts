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

// are we using swagger, else this should just be a seperate class
export class Account {
  username: string;
  password: string;
}

// might not be needed
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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: Account;
  loginForm: FormGroup;
  matcher = new LoginErrorStateMatcher();

  constructor(private formBuilder: FormBuilder ) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.email, Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            )
          ]
        ]
      }
    );
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.User.username = this.loginForm.value.email;
    this.User.password = this.loginForm.value.password;
    if (this.loginForm.invalid) {
      return;
    }
  }

  ngOnInit() {
  }

}
