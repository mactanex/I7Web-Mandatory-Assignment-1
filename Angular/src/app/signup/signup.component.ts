import { Component, OnInit } from '@angular/core';
import { Account } from './../Models/Account';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OpretErrorStateMatcher } from '../Errorhandling/OpretErrorStateMatcher';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User: Account = new Account();
  opretForm: FormGroup;

  matcher = new OpretErrorStateMatcher();
  message = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.opretForm = this.formBuilder.group(
      {
        Username: ['', [Validators.email, Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            )
          ]
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            )
          ]
        ]
      },
      { validator: this.checkPasswords }
    );
  }
  get formControls() {
    return this.opretForm.controls;
  }

  opret() {
    this.User.username = this.opretForm.value.Username;
    this.User.password = this.opretForm.value.password;
    if (this.opretForm.invalid) {
      return;
    } else {
      this.authService.signup(this.User);
      this.router.navigateByUrl('/login');
    }
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }
  ngOnInit() {}
}
