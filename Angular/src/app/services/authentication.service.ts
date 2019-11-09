import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/Models/Account';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private client: HttpClient, private router: Router, private snackbar: SnackbarService) {}
  // userurls
  private loginurl = 'login';
  private signupurl = 'signup';
  // api/get
  private logouturl = 'logout';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public loggedIn = () =>
    localStorage.getItem('currentUserToken') &&
    localStorage.getItem('currentUserToken').length > 0

  login(account: Account) {
    this.client
      .post(environment.apiBaseUrl + this.loginurl, account, this.httpOptions)
      .subscribe(
        res => {
          localStorage.setItem('currentUserToken', JSON.stringify(res));

          this.router.navigateByUrl('/allexercise');
        },
        error => {
          console.log('error with logging in: ' + error.status);
          this.snackbar.openFailureSnackBar('error with logging in: ' + error.status);
        }
      );
  }

  signup(account: Account) {
    console.log(environment.apiBaseUrl + this.signupurl);
    this.client
      .post(environment.apiBaseUrl + this.signupurl, account, this.httpOptions)
      .subscribe(
        res => console.log(res),
        error => {
          console.log('error with signing up ' + error.status);
          this.snackbar.openFailureSnackBar('error with signing in: ' + error.status);
        }
      );
  }

  logout() {
    localStorage.clear();
    return this.client.get(
      environment.apiBaseUrl + this.logouturl,
      this.httpOptions
    );
  }
}
