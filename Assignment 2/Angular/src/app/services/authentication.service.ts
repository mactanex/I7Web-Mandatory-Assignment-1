import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/Models/Account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
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

  constructor(private client: HttpClient) { }

  login(account: Account) {
    this.client.post(environment.apiBaseUrl + this.loginurl, account, this.httpOptions).subscribe(
      res => {
        localStorage.setItem('currentUserToken', JSON.stringify(res));
      }, error => {
        console.log('error with logging in: ' + error);
      }
    );
  }


  signup(account: Account) {
    console.log(environment.apiBaseUrl + this.signupurl);
    this.client.post(environment.apiBaseUrl + this.signupurl, account, this.httpOptions).subscribe(res => console.log(res), error => {
      console.log('error with signing up ' + error);
    }
    );
  }

  logout() {
    localStorage.clear();
    return this.client.get(environment.apiBaseUrl + this.logouturl, this.httpOptions);
  }

}
