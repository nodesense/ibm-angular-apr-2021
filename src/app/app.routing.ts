// app.routing.ts
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const config: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    },

    {
        // code split, keep product bundle in separate js file
        // download the bundle when user visit /products link
        path: 'products',
        
        loadChildren: () => import("./product/product.module").then (m => m.ProductModule)
    },

    // Must be last, this shall be matched when no matching route found
    {
        path: '**', // wildcard
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        // apply routing config to angular
        RouterModule.forRoot(config)
    ]
})
export class AppRoutingModule {

}

