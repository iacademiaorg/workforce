import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowseRecentComponent } from './browse-recent/browse-recent.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { RegisterGComponent } from './register-g/register-g.component';
import { SolvedComponent } from './browse-recent/solved/solved.component';
import { LodgedComponent } from './browse-recent/lodged/lodged.component';
import { GDashboardComponent } from './gdashboard/gdashboard.component';




const routes: Routes = [
  {
    path: 'grievance-redressal',
    component: GDashboardComponent,
    data: { title: 'grievance-redressal' }
  },
{
  path: 'browse-redressal',
  component: BrowseRecentComponent,
  data: { title: 'browse-redressal' }
},
{
  path: 'check-status',
  component: CheckStatusComponent,
  data: { title: 'check-status' }
},
{
  path: 'Grievance-registration',
  component: RegisterGComponent,
  data: { title: 'Grievance-registration' }
},
{
  path: 'solved-grievances',
  component: SolvedComponent,
  data: { title: 'solved-grievances' }
},
{
  path: 'lodged-grievances',
  component: LodgedComponent,
  data: { title: 'lodged-grievances' }
},
{
  path: '',
  redirectTo: 'grievance-redressal',
  pathMatch:'full'
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrievanceRoutingModule { }
