import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseWorker';
  // temp until auth is setup with API
  loggedin = false;

  constructor(private router: Router, private authService: AuthenticationService) {


    router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        const currentUser = localStorage.getItem('currentUserToken');
        if (currentUser) {
          this.loggedin = true;
        } else {
          this.loggedin = false;
        }
      }

    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');

  }


}
