import { RouteDefinition } from 'angular2/router';
import { ScrollComponent} from '../scroll/scroll.component';

export const RouteDefinitions: RouteDefinition[] = [
    {
        path: '/scroll',
        name: 'Scroll',
        component: ScrollComponent,
        useAsDefault: true
    }
];