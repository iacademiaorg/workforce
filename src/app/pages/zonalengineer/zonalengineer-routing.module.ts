import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddZeComponent } from './add-ze/add-ze.component'
import { AuthGuard } from 'src/app/utils/guards/auth.guard'


const routes: Routes = [
    {
        path: 'add-ze',
        component: AddZeComponent,
        data: { title: 'Add Zonal Engineer' },
        canActivate: [AuthGuard],
    },
    {
        path: 'ze-list',
        component: AddZeComponent,
        data: { title: 'Zonal Engineer List' },
        canActivate: [AuthGuard],
    },
    {
        path: '',
        redirectTo: 'ze-list',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ZonalengineerRouterModule { }
