import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';


@Component({
  selector: 'app-register-g',
  templateUrl: './register-g.component.html',
  styleUrls: ['./register-g.component.scss']
})
export class RegisterGComponent  {
  topics = [' wage payments', ' leave', 'transfer','promotion','seniority work assignment',' working conditions',' sanitation','availability of transport','victimization by contractors','Harassement',''];
  userModel = new User('','','','','','',null,'default','','','');
  topicHasError = true;
  submitted = false;
  constructor() {}

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.userModel);
  }





}
