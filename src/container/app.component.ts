import { Component, OnInit }       from 'angular2/core';
import { RouteDefinition } from 'angular2/router';
import { RouteDefinitions } from './route-definitions';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'scroll-app',
    templateUrl: 'app/container/view/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(RouteDefinitions)
export class AppComponent {
    title = 'Infinite scroll';
    constructor() { }
}