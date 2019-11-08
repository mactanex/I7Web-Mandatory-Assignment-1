import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../Models/Account';
import { exercise } from '../Models/exercise';
import { environment } from 'ExerciseWorker/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DALService {
  // exerciseprogramurls
  private getallexerciseprogramurl =
    'http://localhost:3333/exerciseprogram/GetAll'; // to test locally , remember to remove get
  private getexerciseprogramurl =
    'http://localhost:3333/exerciseprogram/:id/Get';
  private postexerciseprogramurl = 'http://localhost:3333/exerciseprogram/Post';
  private putexerciseprogramurl =
    'http://localhost:3333/exerciseprogram/:id/Put';
  private deleteexerciseprogramurl =
    'http://localhost:3333/exerciseprogram/:id/Delete';
  // exerciseurls
  private getallexerciseurl =
    'http://localhost:3333/exerciseprogram/:id/exercise/GetAll';
  private getexerciseurl =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/Get';
  private postexerciseurl =
    'http://localhost:3333/exerciseprogram/:id/exercise/Post';
  private putexerciseurl =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/Put';
  private deleteexerciseurl =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/Delete';
  // logurls
  private getallactivities =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/GetAll';
  private getactivities =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/Get';
  private postactivities =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/Post';
  private putactivities =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/Put';
  private deleteactivities =
    'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/delete';

  constructor(private client: HttpClient) {}

  public post<T>(object: T) {
    return this.client.post<T>(this.getUrl<T>(object), object);
  }

  public get<T>(object: T) {
    return this.client.get<T>(this.getUrl<T>(object), object);
  }

  getUrl<T>(object: T): string {
    switch (object.constructor) {
      case exercise:
        return environment.api;
      default:
        break;
    }
  }

  public signup(user: Account) {
    return this.client.post<Account>(this.signupurl, user); // jwt header ?
  }

  public login(user: Account) {
    return this.client.post<Account>(this.loginurl, user);
  }

  public logout() {
    return this.client.get(this.logouturl);
  }
}
