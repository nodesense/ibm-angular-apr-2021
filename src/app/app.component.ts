// from node_modules, part of vendor bundle
import {Component} from '@angular/core'; 

// MV C/P/VM
// Angular - Model View Whatever MVW

//Component is a decorator, decorator means a meta data attached to class, function ..
// a custom html tag, <app-root>
@Component({
    selector: 'app-root', // html tag
    templateUrl: './app.component.html', // V for View
    styleUrls: [ // scopped style, only applied to this component only
        './app.component.scss'
    ]
})
export class AppComponent { // C in MVC, C may be Component/Controller
    // data models, M in MVC
    // shall be binded to view
    appTitle = 'Product App'

    // called before loading view into browser
    // angualr create object for component, module
    constructor() {
        console.log('AppComponent created')
    }

    //ngOnInit is called after the view is rendered in the browser for first time
    ngOnInit() {
        console.log('AppComponent ngOnInit')
    }
}
