import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared.module'

import { ZonalengineerRouterModule } from './zonalengineer-routing.module';
import { AddZeComponent } from './add-ze/add-ze.component';

const COMPONENTS = [
    AddZeComponent
]

@NgModule({

    imports: [
        ZonalengineerRouterModule,
        SharedModule
    ],
    declarations: [...COMPONENTS]
})
export class ZonalengineerModule { }
