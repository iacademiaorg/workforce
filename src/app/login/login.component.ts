import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../utils/services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../utils/services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    public loginForm: FormGroup;

    auth2: any;
    @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

    constructor(
        private renderer: Renderer2,
        private appService: AppService,
        private authService: AuthService,
        private router: Router,
        private storage: StorageService
    ) { }

    ngOnInit() {
        this.authService.SignOut();
        // this.renderer.addClass(document.body, 'login-page');
        this.renderer.removeClass(document.body, 'register-page');
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });

        this.googleSDK();
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

   async prepareLoginButton() 
    {
 
        this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
          (googleUser) => {
       
            let profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            
            //code for initiating a session
           
            var id_token = googleUser.getAuthResponse().id_token;

            this.storage.saveToken(id_token);
            this.storage.saveUserID(profile.getId());
            this.storage.saveUsername(profile.getName());
            this.storage.saveUserID(profile.getId());
            this.storage.saveLogoUrl(profile.getImageUrl());
            this.router.navigate([''])
          }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
          });
          
       
    }

    async googleSDK() 
    {
        window['googleSDKLoaded'] = () => {
          window['gapi'].load('auth2', () => {
            this.auth2 = window['gapi'].auth2.init({
              client_id: '582105515025-7t5ruhj9fplhu77gk5qpihioirmehi5m.apps.googleusercontent.com',
              cookie_policy: 'single_host_origin',
              scope: 'profile email'
            });
            this.prepareLoginButton();
                            });
                                         }   
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'google-jssdk'));

    }

}
