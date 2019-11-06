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
import { Router } from '@angular/router';
// are we using swagger, else this should just be a seperate class
export class Account {
  username: string;
  password: string;
}

// might not be needed
export class OpretErrorStateMatcher implements ErrorStateMatcher {
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User: Account;
  opretForm: FormGroup;

  matcher = new OpretErrorStateMatcher();
  message = '';
  constructor( private formBuilder: FormBuilder,
               private router: Router) {
                this.opretForm = this.formBuilder.group(
                  {
                    email: ['', [Validators.email, Validators.required]],
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
                  this.User.username = this.opretForm.value.email;
                  this.User.password = this.opretForm.value.password;
                  if (this.opretForm.invalid) {
                    return;
                  }
                }

                checkPasswords(group: FormGroup) {
                  // here we have the 'passwords' group
                  const pass = group.get('password').value;
                  const confirmPass = group.get('confirmPassword').value;

                  return pass === confirmPass ? null : { notSame: true };
                }
  ngOnInit() {
  }

}
