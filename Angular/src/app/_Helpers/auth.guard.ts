import { Injectable } from '@angular/core';
import { Router, UrlSegment, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {




    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = JSON.parse(localStorage.getItem('currentUserToken'));
        if (currentUser.token) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canLoad(route: Route): boolean {
        const currentUser = localStorage.GetItem('currentUserToken');
        return currentUser ? true : false;
    }
}
