"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var billing_helper_service_1 = require("./billing-helper.service");
var utils_service_1 = require("./utils.service");
var CommonAppModule = (function () {
    function CommonAppModule() {
    }
    return CommonAppModule;
}());
CommonAppModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        providers: [billing_helper_service_1.BillingHelperService, utils_service_1.UtilService]
    })
], CommonAppModule);
exports.CommonAppModule = CommonAppModule;
//# sourceMappingURL=common-app.module.js.map