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
var product_component_1 = require("./product.component");
var home_module_1 = require("../home/home.module");
var product_service_1 = require("../shared/services/product.service");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_module_1.HomeModule
        ],
        declarations: [
            product_component_1.ProductComponent
        ],
        providers: [
            product_service_1.ProductService
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
/**
 * Created by Окси on 10.03.2017.
 */
//# sourceMappingURL=product.module.js.map