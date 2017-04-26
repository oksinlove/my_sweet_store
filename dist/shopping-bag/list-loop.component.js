"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shopping_bag_service_1 = require("./shopping-bag.service");
var ListLoopComponent = (function () {
    function ListLoopComponent(shoppingBagService) {
        this.shoppingBagService = shoppingBagService;
        this.products = [];
    }
    ListLoopComponent.prototype.ngOnInit = function () {
        this.products = this.shoppingBagService.getItems();
    };
    return ListLoopComponent;
}());
ListLoopComponent = __decorate([
    core_1.Component({
        selector: 'list-loop',
        templateUrl: '../../app/shopping-bag/shopping-list.component.html',
        styleUrls: ['../../app/shopping-bag/shopping-list.component.css']
    }),
    __metadata("design:paramtypes", [shopping_bag_service_1.ShoppingBagService])
], ListLoopComponent);
exports.ListLoopComponent = ListLoopComponent;
/**
 * Created by Окси on 20.04.2017.
 */
//# sourceMappingURL=list-loop.component.js.map