import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RootRouter } from './router/router';
import { CommonService } from './utils/common.service';
import { HttpService } from './utils/ajax';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ProComponent } from './components/pro/pro.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RangePipe } from './utils/range.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProComponent,
    PagenotfoundComponent,
    RangePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RootRouter,
    HttpModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    CommonService,
    HttpService
  ],
  bootstrap: [IndexComponent]
})
export class AppModule { }
