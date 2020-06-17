import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrievanceRoutingModule } from './grievance-routing.module';
import { RegisterGComponent } from './register-g/register-g.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { LodgedComponent } from './browse-recent/lodged/lodged.component';
import { SolvedComponent } from './browse-recent/solved/solved.component';
import { BrowseRecentComponent } from './browse-recent/browse-recent.component';



@NgModule({
  declarations: [ RegisterGComponent, CheckStatusComponent, LodgedComponent, SolvedComponent, BrowseRecentComponent],
  imports: [
    CommonModule,
    GrievanceRoutingModule
  ]
})
export class GrievanceModule { }
