import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard.component'
import { AuthGuard } from 'src/app/utils/guards/auth.guard'

const routes: Routes = [
    {
        path: 'index',
        component: DashboardComponent,
        data: { title: 'Dashboard' },
        canActivate: [AuthGuard],
    },
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRouterModule { }
