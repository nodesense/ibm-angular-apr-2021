import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
 
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { AppRoutingModule } from './app.routing';

import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ProductModule } from './product/product.module';

import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

// module is a logical collection of components, pipes, directives, + services
// dependencies to other modules, imports/exports
@NgModule({
    declarations: [ // all components, pipes, directives
        AppComponent, 
        HomeComponent, 
        AboutComponent, 
        ContactComponent, HeaderComponent, FooterComponent, NotFoundComponent, ForbiddenComponent,
        // Header,
        // Footer, Home.....
    ], 

    imports: [ // other modules to be used in app module
            BrowserModule, // incledes CommonModule
            
            HttpClientModule, // include HttpClient service
            // App specific modules
            SharedModule,
            CartModule,
            ProductModule,

            AppRoutingModule,
            RouterModule,
            
    ],

    bootstrap: [ // the main/app component which should be loaded very first
        AppComponent
    ]
})
export class AppModule {
    constructor() {
        console.log('AppModule created')
    }
    //TODO: 
}