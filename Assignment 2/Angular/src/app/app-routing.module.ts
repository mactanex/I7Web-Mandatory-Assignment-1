import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllexerciseComponent } from './allexercise/allexercise.component';
import { NewexerciseprogramComponent } from './newexerciseprogram/newexerciseprogram.component';
import { DetailexerciseprogramComponent } from './detailexerciseprogram/detailexerciseprogram.component';
import { AuthGuard } from './_Helpers/auth.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'allexercise',
    component: AllexerciseComponent
  },
  {
    path: 'newExercise',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    component: NewexerciseprogramComponent
  },
  {
    path: 'detailExercise/:id',
    canActivate: [AuthGuard],
    component: DetailexerciseprogramComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'detailExercise',
    canActivate: [AuthGuard],
    component: DetailexerciseprogramComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
