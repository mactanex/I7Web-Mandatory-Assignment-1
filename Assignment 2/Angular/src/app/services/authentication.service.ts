import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // userurls
  private loginurl = 'login';
  private signupurl = 'signup';
  // api/get
  private logouturl = 'logout';

  constructor(private client: HttpClient) { }

  login(account: Account) {
    return this.client.post(this.loginurl, account, {});
  }

  signup() {

  }


}
