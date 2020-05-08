import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { StorageService } from './storage.service';

interface User {
    uid: string
    email: string
    displayName: string
    photoURL: string
    emailVerified: boolean
    role: string
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    userData: any

    constructor(
        public router: Router,
        private storage: StorageService
    ) {

    }

    async SignIn(email: string, password: string) {
        if (email=="admin" && password == "1234") {
            try {
                this.userData = { displayName: 'admin', email: 'admin@test.com' };
                this.storage.saveToken("tokenaccept")
                this.storage.saveUserID(1)
                this.router.navigate([''])
            } catch (error) {
    
            }
        }
        
    }

    get isLoggedIn(): boolean {
        return this.storage.loginStatus();
    }

    async SignOut() {
        this.storage.clearStorage();
        this.router.navigate(['login']);
    }
}
