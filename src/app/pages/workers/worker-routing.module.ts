import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from 'src/app/utils/guards/auth.guard'
import { AddWorkerComponent } from './add-worker/add-worker.component'
import { WorkerListComponent } from './worker-list/worker-list.component'
import { WorkerLawsComponent } from './worker-laws/worker-laws.component'


const routes: Routes = [
    {
        path: 'worker-list',
        component: WorkerListComponent,
        data: { title: 'Worker List' },
        canActivate: [AuthGuard],
    },
    {
        path: 'add-worker',
        component: AddWorkerComponent,
        data: { title: 'Add Worker' },
        canActivate: [AuthGuard],
    },
    {
      path:'worker-laws',
      component: WorkerLawsComponent,
      data: { title : 'Worker Laws'},
      canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'worker-list',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkerRouterModule { }
