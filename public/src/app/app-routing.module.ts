import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BillingUsageComponent } from './billing-usage/billing-usage.component'

const routes: Routes = [
   { path: 'billing-usage', component: BillingUsageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
