import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/Material/Material.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllexerciseComponent } from './allexercise/allexercise.component';
import { NewexerciseprogramComponent } from './newexerciseprogram/newexerciseprogram.component';
import { DetailexerciseprogramComponent } from './detailexerciseprogram/detailexerciseprogram.component';

import { JwtInterceptor } from './_Helpers/jwt.interceptor';

import { LogactivitysheetComponent } from './logactivitysheet/logactivitysheet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AllexerciseComponent,
    NewexerciseprogramComponent,
    DetailexerciseprogramComponent,
    LogactivitysheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true,
  }],

  entryComponents: [
    LogactivitysheetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
