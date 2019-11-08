import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../Models/Account';
import { exercise } from '../Models/exercise';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DALService {
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
        return environment.apiBaseUrl + 'exerciseprogram/:id/exercise/Post';
      default:
        break;
    }
  }
}
