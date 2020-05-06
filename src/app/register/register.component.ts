import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    fruits: Array<string> = ["apple", "pear", "kiwi", "banana", "grape", "strawberry", "grapefruit", "melon", "mango", "plum"];

    formGroup: FormGroup;

    nameFormGroup: FormGroup;
    emailFormGroup: FormGroup;

    steps = [
        { label: 'Confirm your name', content: 'Last name, First name.' },
        { label: 'Confirm your contact information', content: '123-456-7890' },
        { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
        { label: 'You are now done', content: 'Finished!' }
    ];

    get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

    public registerForm: FormGroup;

    constructor(
        private renderer: Renderer2,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    name : ['', Validators.required],
                    dob : ['', Validators.required],
                    age : [''],
                    mobile : ['',Validators.required]
                }),
                this._formBuilder.group({
                    emailFormCtrl: ['', Validators.email]
                }),
            ])
        });

        this.registerForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

}
