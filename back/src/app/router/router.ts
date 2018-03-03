import {RouterModule,Routes} from '@angular/router';

import { ProComponent } from '../components/pro/pro.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'pro', component: ProComponent},
    {path: '**',component: PagenotfoundComponent}
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    {enableTracing: false}
)