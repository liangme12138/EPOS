import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService} from '../utils/ajax'
// import { ElModule } from 'element-angular'
import { AppRoutingModule } from './app-routing.module';
// import { ElModule } from 'element-angular'
// import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';
import { CartComponent } from './cart/cart.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';
import { OrderComponent } from './order/order.component';
import { PublicMenusComponent } from './public-menus/public-menus.component';
import { HotSalesPipe } from '../pipe/hot-sales.pipe';
import { QuickLoginComponent } from './quick-login/quick-login.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    DetailsComponent,
    Page404Component,
    CartComponent,
    ProductDescComponent,
    ProductSellerComponent,
    LoginComponent,
    RegComponent,
    HeaderComponent,
    MenusComponent,
    OrderComponent,
    PublicMenusComponent,
    HotSalesPipe,
    QuickLoginComponent,
    ConfirmOrderComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ElModule.forRoot(),
    BrowserAnimationsModule
    // WeUiModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
