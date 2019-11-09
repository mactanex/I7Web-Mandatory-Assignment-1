import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IsLoadingService } from '@service-work/is-loading';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private isLoadingService: IsLoadingService,
    private authService: AuthenticationService
  ) {
    router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.loggedin = authService.loggedIn();
      }
    });
  }

  title = 'ExerciseWorker';
  // temp until auth is setup with API
  loggedin = false;
  isLoading: Observable<boolean>;
  ngOnInit(): void {
    this.isLoading = this.isLoadingService.isLoading$();
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe(event => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart) {
          this.isLoadingService.add();
          return;
        }

        // Else navigation has ended, so `remove()` a loading indicator
        this.isLoadingService.remove();
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
