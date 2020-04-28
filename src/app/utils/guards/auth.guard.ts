import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(
        public authService: AuthService,
        public router: Router,
        public storage: StorageService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        // if (this.authService.isLoggedIn !== true) {
        //     this.router.navigate(['auth/login'])
        //     return false;
        // }
        // return true;

        //User logged in return true
        if (this.authService.isLoggedIn) {
            return true;
        }

        //User is not logged in, redirect to login page
        this.router.navigate(['login'])
        return false;

    }
}
