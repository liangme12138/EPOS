import {RouterModule,Routes} from '@angular/router';

import { ProductComponent } from '../components/product/product.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'product', component: ProductComponent},
    {path: '**',component: PagenotfoundComponent}
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    {enableTracing: false}
)