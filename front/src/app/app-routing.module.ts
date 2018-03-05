import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';
import { CartComponent } from './cart/cart.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { MenusComponent } from './menus/menus.component';
import { OrderComponent } from './order/order.component'

const routes: Routes = [
  { path: '', redirectTo:'/home/menus',pathMatch:'full'},
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
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
