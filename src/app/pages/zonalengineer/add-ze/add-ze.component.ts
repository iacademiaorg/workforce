import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-ze',
  templateUrl: './add-ze.component.html',
  styleUrls: ['./add-ze.component.scss']
})
export class AddZeComponent implements OnInit {
fruits: Array<string> = ["apple", "pear", "kiwi", "banana", "grape", "strawberry", "grapefruit", "melon", "mango", "plum"];

formGroup: FormGroup;

//nameFormGroup: FormGroup;
//emailFormGroup: FormGroup;
pattern = new RegExp(/^\d{5}(?:\d{2})?$/);



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
    private formBuilder: FormBuilder
) { }

ngOnInit() {
    this.formGroup = this.formBuilder.group({
        
                name : ['', [Validators.required]],
                dob : ['', [Validators.required]],
                age : ['',[Validators.required,Validators.pattern('[0-9]{2}')]],
                mobile : ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
                emailFormCtrl: ['', [Validators.email,Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
                street: ['', [Validators.required]],
                state: ['', [Validators.required]],
                city: ['',[ Validators.required]],
                zip: ['', [Validators.compose([Validators.required,Validators.pattern('[0-9]{6}')])]],
               image:['',[Validators.required]]
        
    
    });

    /*this.registerForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
        
        
    });*/
}
onSubmit() {
    
    

    if (this.registerForm.valid) {
        console.log("Form Submitted!");
        this.registerForm.reset();
  }
}
}
