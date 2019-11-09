import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exercise } from '../Models/exercise';
import { environment } from 'src/environments/environment';
import { exerciseprogram } from '../Models/exerciseprogram';
import { AllPrograms } from '../Models/AllPrograms';
import { IsLoadingService } from '@service-work/is-loading';

@Injectable({
  providedIn: 'root'
})
export class ExerciseProgramService {
  public allPrograms: AllPrograms = { allPrograms: [] };

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

  constructor(
    private client: HttpClient,
    private loadingService: IsLoadingService
  ) {}
  public postExerciseProgram = async (ex: exerciseprogram) =>
    await this.loadingService.add(
      this.client.post<exerciseprogram>(this.getUrl(ex), ex).toPromise()
    )

  public getAllExercisesPrograms = async () => {
    this.allPrograms = await this.loadingService.add(
      this.client.get<AllPrograms>(this.exerciseProgramUrl).toPromise()
    );
    return this.allPrograms;
  }
  public getExerciseProgram = async (id: string) =>
    await this.loadingService.add(
      this.client
        .get<exerciseprogram>(this.exerciseProgramUrl + `/${id}`)
        .toPromise()
    )

  public putExerciseProgram = async (ex: exerciseprogram) =>
    await this.loadingService.add(
      this.client
        .put<exerciseprogram>(this.exerciseProgramUrl + `/${ex.id}`, ex)
        .toPromise()
    )

  public deleteExerciseProgram = async (id: string) =>
    await this.loadingService.add(
      this.client
        .delete<exerciseprogram>(this.exerciseProgramUrl + `/${id}`)
        .toPromise()
    )
}
