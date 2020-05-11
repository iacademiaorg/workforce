import { NgModule } from '@angular/core'
import { AddWorkerComponent } from './add-worker/add-worker.component'
import { WorkerRouterModule } from './worker-routing.module'
import { WorkerService } from './services/worker.service'
import { SharedModule } from 'src/app/shared.module'

const COMPONENTS = [
   AddWorkerComponent
]

@NgModule({
    imports: [
        WorkerRouterModule,
        SharedModule
    ],
    declarations: [...COMPONENTS],
    providers: [WorkerService]
})
export class WorkerModule { }
