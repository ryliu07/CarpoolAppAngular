"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var find_car_component_1 = require("./find-car/find-car.component");
var find_passenger_component_1 = require("./find-passenger/find-passenger.component");
var login_component_1 = require("./login/login.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var welcome_page_component_1 = require("./welcome-page/welcome-page.component");
var mainAppRoutes = [
    { path: '', component: welcome_page_component_1.WelcomePageComponent },
    { path: 'find-car', component: find_car_component_1.FindCarComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'find-passenger', component: find_passenger_component_1.FindPassengerComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(mainAppRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
