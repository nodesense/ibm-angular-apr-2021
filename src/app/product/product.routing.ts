// product.routing.ts

import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AdminGuard } from '../auth/guards/admin.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';

const routes: Routes = [
    {
        // parent page, hostd into the app.component.html
        path: 'products',
        component: ProductHomeComponent,

        // nested navigation
        children: [
            {
                path: '', // localhost:4200/products
                component: ProductListComponent
            },
            {
                path: 'create', // products/create
                component: ProductEditComponent,
                canDeactivate: [SaveAlertGuard],
                canActivate: [ AdminGuard, AuthGuard]
            },
            {
                path: 'edit/:id', // products/edit/1234567
                component: ProductEditComponent,
                canActivate: [CanEditGuard, AdminGuard, AuthGuard],
                canDeactivate: [SaveAlertGuard],
            },
            {
                path: 'search',
                component: ProductSearchComponent
            }
        ]
    },
]

@NgModule({
    imports: [
        // lazy loaded/sub module, forChild has fewer services
        RouterModule.forChild(routes)
    ],
    exports: [
        // component, directives, pipes
        // Modules, all the component, directives, pipes exported in module are re-exported
        RouterModule
    ]
})
export class ProductRoutingModule {

}