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
var customer_analysis_component_1 = require("./customer-analysis.component");
var customer_analysis_service_1 = require("./customer-analysis.service");
var material_1 = require("@angular/material");
var AnalysisModule = (function () {
    function AnalysisModule() {
    }
    return AnalysisModule;
}());
AnalysisModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, ng2_bootstrap_1.TypeaheadModule.forRoot(), ng2_bootstrap_1.TabsModule.forRoot(), material_1.MdProgressBarModule],
        declarations: [customer_analysis_component_1.CustomerAnalysisComponent],
        providers: [customer_analysis_service_1.CustomerAnalysisService]
    })
], AnalysisModule);
exports.AnalysisModule = AnalysisModule;
//# sourceMappingURL=analysis.module.js.map