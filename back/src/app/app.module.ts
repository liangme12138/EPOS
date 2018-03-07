import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RootRouter } from './router/router';
import { CommonService } from './utils/common.service';
import { HttpService } from './utils/ajax';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RangePipe } from './utils/range.pipe';
import {DataGridComponent} from './components/datagrid/datagrid.component';
import {DataformComponent} from './components/dataform/dataform.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProComponent } from './components/pro/pro.component';
import { AccountComponent } from './components/account/account.component';
import { OrderComponent } from './components/order/order.component';
import { DailyOrderComponent } from './components/daily-order/daily-order.component';
import { StoreComponent } from './components/store/store.component';
import { WarningComponent } from './components/warning/warning.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductComponent,
    PagenotfoundComponent,
    RangePipe,
    DataGridComponent,
    DataformComponent,
    LoginComponent,
    HomeComponent,
    ProComponent,
    AccountComponent,
    OrderComponent,
    DailyOrderComponent,
    StoreComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RootRouter,
    HttpModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    CommonService,
    HttpService,
    FormBuilder,
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
