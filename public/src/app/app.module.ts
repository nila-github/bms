import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import {CommonAppModule} from './common/common-app.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule } from "./app-routing.module";
import { BillingUsageModule } from './billing-usage/billing-usage.module'

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import * as moment from 'moment';

let config: any = {
    animate: 'flyRight',
    newestOnTop: false,
    showCloseButton: true,
};

@NgModule({
    imports: [BrowserModule, AppRoutingModule, CommonAppModule, BillingUsageModule,
        ToastModule.forRoot(config), MaterialModule.forRoot()],
    declarations: [AppComponent, HomeComponent, MenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
