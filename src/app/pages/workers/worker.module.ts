import { NgModule } from '@angular/core'
import { AddWorkerComponent } from './add-worker/add-worker.component'
import { WorkerRouterModule } from './worker-routing.module'
import { WorkerService } from './services/worker.service'
import { SharedModule } from 'src/app/shared.module';
import { WorkerLawsComponent } from './worker-laws/worker-laws.component'

const COMPONENTS = [
   AddWorkerComponent
]

@NgModule({
    imports: [
        WorkerRouterModule,
        SharedModule
    ],
    declarations: [...COMPONENTS, WorkerLawsComponent],
    providers: [WorkerService]
})
export class WorkerModule { }
