import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { GrievanceRoutingModule } from './grievance-routing.module';
import { RegisterGComponent } from './register-g/register-g.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { LodgedComponent } from './browse-recent/lodged/lodged.component';
import { SolvedComponent } from './browse-recent/solved/solved.component';
import { BrowseRecentComponent } from './browse-recent/browse-recent.component';
import{ ConfirmEqualValidatorDirective} from 'src/app/confirm-equal-validator.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ RegisterGComponent, CheckStatusComponent, LodgedComponent, SolvedComponent, BrowseRecentComponent,ConfirmEqualValidatorDirective],
  imports: [
    CommonModule,
    GrievanceRoutingModule,
    FormsModule,
    RouterModule


  ]

})
export class GrievanceModule { }
