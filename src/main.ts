// node_modules
// vendor.js bundle
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; 

// application local folder
// main bundle
import { AppModule } from './app/app.module';

console.log('Bootstraping angular')

// bootstrap first module into browser

platformBrowserDynamic()
                        .bootstrapModule(AppModule)