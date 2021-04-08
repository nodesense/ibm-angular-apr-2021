JIT
    Just In Time [prior angular 10, default] - Development

AoT - Ahead of Time [Angular 10 onwards, default] - Production

For HTML/View

    Angular converts your html/view into JS Code
    to convert html to js, it uses @angular/compiler


Where the conversation take place is what JIT or AoT

    During build time [ng serve, ng build] - AoT
        HTML => TS => JS => included as part of the bundle
        @angular/compiler is not shipped with production code, saving bundle size

    During runtime at browser - JIT
        HTML files send as is to the browser
        Angular @angular/compiler module also send to brwoser [3 MB+]
        At browser, before loading components,
            angular compiler shall convert html and generate js file for view,
                then angular start working