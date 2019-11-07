import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Account } from '../Models/Account';
import { LoginErrorStateMatcher } from '../Errorhandling/LoginErrorStateMatcher';

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
