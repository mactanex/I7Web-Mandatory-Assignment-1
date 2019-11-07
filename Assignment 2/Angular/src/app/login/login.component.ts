import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Account } from '../Models/Account';
import { LoginErrorStateMatcher } from '../Errorhandling/LoginErrorStateMatcher';
import { DALService } from '../services/dal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: Account;
  loginForm: FormGroup;
  matcher = new LoginErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private dalservice: DALService ) {
    this.User = new Account();
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
    this.User.username = this.loginForm.value.username;
    this.User.password = this.loginForm.value.password;
    if (this.loginForm.invalid) {
      return;
    } else {
      console.log('loggedin ' + this.User.username + ' ' + this.User.password);
      // this.dalservice.login(this.User);
    }
  }

  ngOnInit() {
  }

}
