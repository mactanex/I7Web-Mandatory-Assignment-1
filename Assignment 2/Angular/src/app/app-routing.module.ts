import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllexerciseComponent } from './allexercise/allexercise.component';
import { NewexerciseprogramComponent } from './newexerciseprogram/newexerciseprogram.component';
import { DetailexerciseprogramComponent } from './detailexerciseprogram/detailexerciseprogram.component';

const appRoutes: Routes = [
{
    path: 'login',
    component: LoginComponent,
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
    component: NewexerciseprogramComponent
},
{
    path: 'detailExercise/:id',
    component: DetailexerciseprogramComponent
},
{
    path: 'detailExercise',
    component: DetailexerciseprogramComponent
}
];

@NgModule({
imports: [
RouterModule.forRoot(appRoutes)
],
exports: [
    RouterModule
]})
export class AppRoutingModule { }
