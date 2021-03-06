import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exercise } from '../Models/exercise';
import { environment } from 'src/environments/environment';
import { IsLoadingService } from '@service-work/is-loading';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(
    private client: HttpClient,
    private loadingService: IsLoadingService
  ) {}
  private exerciseUrl = environment.apiBaseUrl + 'exerciseprogram';


  getUrl = (exerciseProgramId: string) =>
    this.exerciseUrl + `/${exerciseProgramId}/exercise`

  public postExercise = async (exerciseProgramId: string, ex: exercise) =>
    await this.loadingService.add(
      this.client.post<exercise>(this.getUrl(exerciseProgramId), ex).toPromise()
    )

  public getAllExercises = async (exerciseProgramId: string) =>
    await this.loadingService.add(
      this.client.get<exercise[]>(this.getUrl(exerciseProgramId)).toPromise()
    )

  public getExercise = async (exerciseProgramId: string, id: string) =>
    await this.loadingService.add(
      this.client
        .get<exercise>(this.getUrl(exerciseProgramId) + `/${id}`)
        .toPromise()
    )

  public putExercise = async (exerciseProgramId: string, ex: exercise) =>
    await this.loadingService.add(
      this.client
        .put<exercise>(this.getUrl(exerciseProgramId) + `/${ex.id}`, ex)
        .toPromise()
    )

  public deleteExercise = async (exerciseProgramId: string, id: string) =>
    await this.loadingService.add(
      this.client
        .delete<exercise>(this.getUrl(exerciseProgramId) + `/${id}`)
        .toPromise()
    )
}
