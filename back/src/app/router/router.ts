import {RouterModule,Routes} from '@angular/router';

import { ProComponent } from '../components/pro/pro.component';
import { LoginComponent } from '../components/login/login.component';
import { IndexComponent } from '../components/index/index.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { ProductComponent } from '../components/product/product.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { 
        path: 'index',
        component: IndexComponent,
        children: [
            { path: 'pro',component: ProComponent},
            { path: 'product', component: ProductComponent},
        ]
     },
    { path: 'login', component: LoginComponent},
    {path: '**',component: PagenotfoundComponent}

]


export const RootRouter = RouterModule.forRoot(
    appRoutes,
    {enableTracing: false}
)