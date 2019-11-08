import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exercise } from '../Models/exercise';
import { environment } from 'src/environments/environment';
import { exerciseprogram } from '../Models/exerciseprogram';

@Injectable({
  providedIn: 'root'
})
export class ExerciseProgramService {
  // private getallexerciseprogramurl =
  //   'http://localhost:3333/exerciseprogram/GetAll'; // to test locally , remember to remove get
  // private getexerciseprogramurl =
  //   'http://localhost:3333/exerciseprogram/:id/Get';
  // private postexerciseprogramurl = 'http://localhost:3333/exerciseprogram/Post';
  // private putexerciseprogramurl =
  //   'http://localhost:3333/exerciseprogram/:id/Put';
  // private deleteexerciseprogramurl =
  //   'http://localhost:3333/exerciseprogram/:id/Delete';
  // exerciseurls

  private exerciseProgramUrl = environment.apiBaseUrl + 'exerciseprogram';

  getUrl(ex: exerciseprogram): string {
    return this.exerciseProgramUrl;
  }

  constructor(private client: HttpClient) {}
  public postExercise = async (ex: exerciseprogram) =>
    await this.client.post<exerciseprogram>(this.getUrl(ex), ex).toPromise()

  public getAllExercises = async () =>
    await this.client.get<exerciseprogram>(this.exerciseProgramUrl).toPromise()

  public getExercise = async (id: string) =>
    await this.client
      .get<exerciseprogram>(this.exerciseProgramUrl + `/${id}`)
      .toPromise()

  public putExercise = async (ex: exerciseprogram) =>
    await this.client
      .put<exerciseprogram>(this.exerciseProgramUrl + `/${ex.id}`, ex)
      .toPromise()

  public deleteExercise = async (id: string) =>
    await this.client
      .delete<exerciseprogram>(this.exerciseProgramUrl + `/${id}`)
      .toPromise()
}
