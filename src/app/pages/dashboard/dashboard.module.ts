import { NgModule } from '@angular/core'
import { DashboardRouterModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'

const COMPONENTS = [
    // DashboardComponent
]

@NgModule({
    imports: [
        DashboardRouterModule,
    ],
    declarations: [...COMPONENTS],
    providers: []
})
export class DashboardModule { }
