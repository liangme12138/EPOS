import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';
import { CartComponent } from './cart/cart.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { MenusComponent } from './menus/menus.component'
import { QuickLoginComponent } from './quick-login/quick-login.component';
import { CenterComponent } from './center/center.component';
import { DiscountComponent } from './discount/discount.component';
import { UsedComponent } from './used/used.component';
import { NouseComponent } from './nouse/nouse.component';
import { TimeoutComponent } from './timeout/timeout.component';

const routes: Routes = [
  { path: '', redirectTo:'/home/menus',pathMatch:'full'},
  { path:'discount',redirectTo:'/discount/nouse',pathMatch:'full'},
  {path:'home',component:HomeComponent,
    children: [
      {
        path: 'menus', component: MenusComponent
      },
      {
        path: 'order', component: OrderComponent
      }
    ]
  },
  {path:'product',component:ProductComponent,
    children: [
      {
        path:'desc/:descid',component:ProductDescComponent
      },
      {
        path:'seller/:username',component:ProductSellerComponent
      }
    ]
  },
  {path:'details',component:DetailsComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegComponent},
  { path:'menus', component: MenusComponent},
  {path:'quickLogin',component:QuickLoginComponent},
  {path:'center',component:CenterComponent},
  {path: 'discount', component: DiscountComponent,
    children: [
      {path:'used',component:UsedComponent},
      {path:'nouse',component:NouseComponent},
      {path:'timeout',component:TimeoutComponent}
    ]
  {
    path: 'order', component: OrderComponent
  },
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
