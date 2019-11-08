import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Log } from '../Models/Log';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private client: HttpClient) {}

  // private getallactivities =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/GetAll';
  // private getactivities =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/Get';
  // private postactivities =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/Post';
  // private putactivities =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/Put';
  // private deleteactivities =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/activity/:id/delete';
  private exerciseUrl = environment.apiBaseUrl + 'exerciseprogram';

  getUrl = (exerciseProgramId: string, exerciseId: string) =>
    this.exerciseUrl + `/${exerciseProgramId}/exercise/${exerciseId}`

  public postActivity = async (
    exerciseProgramId: string,
    exerciseId: string,
    activity: Log
  ) =>
    await this.client
      .post<Log>(this.getUrl(exerciseProgramId, exerciseId), activity)
      .toPromise()

  public getAllActivities = async (
    exerciseProgramId: string,
    exerciseId: string
  ) =>
    await this.client
      .get<Log[]>(this.getUrl(exerciseProgramId, exerciseId))
      .toPromise()

  public getActivity = async (
    exerciseProgramId: string,
    id: string,
    exerciseId: string
  ) =>
    await this.client
      .get<Log>(this.getUrl(exerciseProgramId, exerciseId) + `/${id}`)
      .toPromise()

  public putActivity = async (
    exerciseProgramId: string,
    exerciseId: string,
    activity: Log
  ) =>
    await this.client
      .put<Log>(
        this.getUrl(exerciseProgramId, exerciseId) + `/${activity.id}`,
        activity
      )
      .toPromise()

  public deleteActivity = async (
    exerciseProgramId: string,
    id: string,
    exerciseId: string
  ) =>
    await this.client
      .delete<Log>(this.getUrl(exerciseProgramId, exerciseId) + `/${id}`)
      .toPromise()
}
