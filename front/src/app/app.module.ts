import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { WeUiModule, FormModule } from 'ngx-weui';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


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
    MenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    WeUiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
