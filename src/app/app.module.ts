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

// module is a logical collection of components, pipes, directives, + services
// dependencies to other modules, imports/exports
@NgModule({
    declarations: [ // all components, pipes, directives
        AppComponent, 
        HomeComponent, 
        AboutComponent, 
        ContactComponent, HeaderComponent, FooterComponent,
        // Header,
        // Footer, Home.....
    ], 

    imports: [ // other modules to be used in app module
            BrowserModule, 

            // App specific modules
            SharedModule,
            CartModule
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