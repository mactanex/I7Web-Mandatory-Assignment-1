import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exercise } from '../Models/exercise';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(private client: HttpClient) {}
  private exerciseUrl = environment.apiBaseUrl + 'exerciseprogram';

  // private getallexerciseurl =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/GetAll';
  // private getexerciseurl =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/Get';
  // private postexerciseurl =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/Post';
  // private putexerciseurl =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/Put';
  // private deleteexerciseurl =
  //   'http://localhost:3333/exerciseprogram/:id/exercise/:id/Delete';

  getUrl = (exerciseProgramId: string) =>
    this.exerciseUrl + `/${exerciseProgramId}/exercise`

  public postExercise = async (exerciseProgramId: string, ex: exercise) =>
    await this.client
      .post<exercise>(this.getUrl(exerciseProgramId), ex)
      .toPromise()

  public getAllExercises = async (exerciseProgramId: string) =>
    await this.client.get<exercise>(this.getUrl(exerciseProgramId)).toPromise()

  public getExercise = async (exerciseProgramId: string, id: string) =>
    await this.client
      .get<exercise>(this.getUrl(exerciseProgramId) + `/${id}`)
      .toPromise()

  public putExercise = async (exerciseProgramId: string, ex: exercise) =>
    await this.client
      .put<exercise>(this.getUrl(exerciseProgramId) + `/${ex.id}`, ex)
      .toPromise()

  public deleteExercise = async (exerciseProgramId: string, id: string) =>
    await this.client
      .delete<exercise>(this.getUrl(exerciseProgramId) + `/${id}`)
      .toPromise()
}
