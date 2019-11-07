import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DALService {

  // exerciseprogramurls
  private getallexerciseprogramurl = 'http://localhost:3333/exerciseprogram/GetAll'; // not sure if getall or GetAll
  private getexerciseprogramurl = 'http://localhost:3333/exerciseprogram/:id/Get';
  private postexerciseprogramurl = 'http://localhost:3333/exerciseprogram/Post';
  private putexerciseprogramurl = 'http://localhost:3333/exerciseprogram/:id/Put';
  private deleteexerciseprogramurl = 'http://localhost:3333/exerciseprogram/:id/Delete';
  // userurls
  private loginurl = 'http://localhost:3333/login';
  private signupurl = 'http://localhost:3333/signup';
  // api/get
  private logouturl = 'http://localhost:3333/logout';
  // exerciseurls
  private getallexerciseurl = 'http://localhost:3333/exerciseprogram/:id/exercise/GetAll';
  private getexerciseurl = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/Get';
  private postexerciseurl = 'http://localhost:3333/exerciseprogram/:id/exercise/Post';
  private putexerciseurl = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/Put';
  private deleteexerciseurl = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/Delete';
  // logurls
  private getallactivities = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/GetAll';
  private getactivities = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/Get';
  private postactivities = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/Post';
  private putactivities = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/Put';
  private deleteactivities = 'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/delete';


  constructor(private client: HttpClient) { }
}
