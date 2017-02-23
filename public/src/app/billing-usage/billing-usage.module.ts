import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment';

import { TypeaheadModule  } from 'ng2-bootstrap/ng2-bootstrap';

import {BillingUsageComponent} from './billing-usage.component'
import {CustomerAnalysisService} from '../analysis/customer-analysis.service'
import { MdProgressBarModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, TypeaheadModule.forRoot(), DatepickerModule.forRoot(), MdProgressBarModule],
    declarations: [BillingUsageComponent],
    providers: [CustomerAnalysisService]
})
export class BillingUsageModule { }
