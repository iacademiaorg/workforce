import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token =  'token'

        if (!token) return next.handle(req);

        const cloned = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + token)
        });

        return next.handle(cloned).pipe(tap(() => { },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status == 401) {
                        this.router.navigate(['auth/login']);
                    } else if (err.status == 403) {
                        this.router.navigate(['unauthorized']);
                    }
                    return;
                }
            })
        );
    }
}