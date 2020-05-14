import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddZeComponent } from './add-ze/add-ze.component'
import { AuthGuard } from 'src/app/utils/guards/auth.guard'


const routes: Routes = [
  {
    path: 'add-ze',
    component: AddZeComponent,
    data: { title: 'zonalengineer' },
    canActivate: [AuthGuard],
},
{
  path: '',
  redirectTo: 'add-ze',
  pathMatch: 'full'
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonalengineerRouterModule { }
