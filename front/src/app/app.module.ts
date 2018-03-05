import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { WeUiModule } from 'ngx-weui';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';
import { CartComponent } from './cart/cart.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';


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
    HeaderComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // WeUiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
