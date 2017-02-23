"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap/ng2-bootstrap");
var billing_usage_component_1 = require("./billing-usage.component");
var customer_analysis_service_1 = require("../analysis/customer-analysis.service");
var material_1 = require("@angular/material");
var BillingUsageModule = (function () {
    function BillingUsageModule() {
    }
    return BillingUsageModule;
}());
BillingUsageModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, ng2_bootstrap_2.TypeaheadModule.forRoot(), ng2_bootstrap_1.DatepickerModule.forRoot(), material_1.MdProgressBarModule],
        declarations: [billing_usage_component_1.BillingUsageComponent],
        providers: [customer_analysis_service_1.CustomerAnalysisService]
    })
], BillingUsageModule);
exports.BillingUsageModule = BillingUsageModule;
//# sourceMappingURL=billing-usage.module.js.map