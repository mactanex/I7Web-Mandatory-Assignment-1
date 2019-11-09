import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Log } from '../Models/Log';
import { HttpClient } from '@angular/common/http';
import { IsLoadingService } from '@service-work/is-loading';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(
    private client: HttpClient,
    private loadingService: IsLoadingService,
    private snackbar: SnackbarService
  ) {}

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
    this.exerciseUrl + `/${exerciseProgramId}/exercise/${exerciseId}/activity`

  public postActivity = async (
    exerciseProgramId: string,
    exerciseId: string,
    activity: Log
  ) =>
    await this.loadingService.add(
      this.client
        .post<Log>(this.getUrl(exerciseProgramId, exerciseId), activity)
        .toPromise().then(() => {this.snackbar.openSuccessSnackBar('posted log to exercise');
      })
    )

  public getAllActivities = async (
    exerciseProgramId: string,
    exerciseId: string
  ) =>
    await this.loadingService.add(
      this.client
        .get<Log[]>(this.getUrl(exerciseProgramId, exerciseId))
        .toPromise().catch(err => {
          this.snackbar.openFailureSnackBar('failed to get logs' + err);
        })
    )

  public getActivity = async (
    exerciseProgramId: string,
    id: string,
    exerciseId: string
  ) =>
    await this.loadingService.add(
      this.client
        .get<Log>(this.getUrl(exerciseProgramId, exerciseId) + `/${id}`)
        .toPromise()
    )

  public putActivity = async (
    exerciseProgramId: string,
    exerciseId: string,
    activity: Log
  ) =>
    await this.loadingService.add(
      this.client
        .put<Log>(
          this.getUrl(exerciseProgramId, exerciseId) + `/${activity.id}`,
          activity
        )
        .toPromise()
    )

  public deleteActivity = async (
    exerciseProgramId: string,
    id: string,
    exerciseId: string
  ) =>
    await this.loadingService.add(
      this.client
        .delete<Log>(this.getUrl(exerciseProgramId, exerciseId) + `/${id}`)
        .toPromise()
    )
}
