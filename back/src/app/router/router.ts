import {RouterModule,Routes} from '@angular/router';

import { ProComponent } from '../components/pro/pro.component';
import { LoginComponent } from '../components/login/login.component';
import { IndexComponent } from '../components/index/index.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { ProductComponent } from '../components/product/product.component';
import { AccountComponent } from '../components/account/account.component';
import { OrderComponent } from '../components/order/order.component';
import { DailyOrderComponent } from '../components/daily-order/daily-order.component';

import {StoreComponent} from '../components/store/store.component'
import {WarningComponent} from '../components/warning/warning.component'
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { 
        path: 'index',
        component: IndexComponent,
        children: [
            { path: 'pro',component: ProComponent},
            { path: 'product', component: ProductComponent },
            { path: 'account', component: AccountComponent },
            { path: 'order', component: OrderComponent },
            { path: 'dailyOrder', component: DailyOrderComponent},
            { path: 'product', component: ProductComponent},
            { path: 'store', component: StoreComponent },
            { path: 'warn', component: WarningComponent}
        ]
     },
    { path: 'login', component: LoginComponent},
    {path: '**',component: PagenotfoundComponent}

]


export const RootRouter = RouterModule.forRoot(
    appRoutes,
    {enableTracing: false}
)