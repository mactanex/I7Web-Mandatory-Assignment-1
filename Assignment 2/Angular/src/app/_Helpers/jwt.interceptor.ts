import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // tslint:disable-next-line: max-line-length
        // why we use localstorage: https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8

        const currentUser = localStorage.GetItem('currentUserToken');
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser}`
                }
            });
        }
        const sub = next.handle(request).subscribe(res => {
            if (res) {
            }
        }, error => {
            if (error instanceof HttpErrorResponse) {
                if (error.status === 401) {
                    this.router.navigate(['']);
                }
            }
        }, () => {
            sub.unsubscribe();
        });

        return next.handle(request);
    }
}
