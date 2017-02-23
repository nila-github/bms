"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var common_app_module_1 = require("./common/common-app.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var app_routing_module_1 = require("./app-routing.module");
var billing_usage_module_1 = require("./billing-usage/billing-usage.module");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var config = {
    animate: 'flyRight',
    newestOnTop: false,
    showCloseButton: true,
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, common_app_module_1.CommonAppModule, billing_usage_module_1.BillingUsageModule,
            ng2_toastr_1.ToastModule.forRoot(config), material_1.MaterialModule.forRoot()],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, menu_component_1.MenuComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map