import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../utils/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    constructor(
        private renderer: Renderer2,
        private appService: AppService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authService.SignOut();
        // this.renderer.addClass(document.body, 'login-page');
        this.renderer.removeClass(document.body, 'register-page');
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    logIn() {
        if (this.loginForm.valid) {
            var username = this.loginForm.value.email
            var password = this.loginForm.value.password
            this.authService.SignIn(username, password)
            this.appService.login();
        } else {
            //   this.toastr.error('Hello world!', 'Toastr fun!');
        }
    }

}
