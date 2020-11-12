"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var find_car_component_1 = require("./pages/find-car/find-car.component");
var find_passenger_component_1 = require("./pages/find-passenger/find-passenger.component");
var login_component_1 = require("./pages/login/login.component");
var welcome_page_component_1 = require("./pages/welcome-page/welcome-page.component");
var page_not_found_component_1 = require("./pages/page-not-found/page-not-found.component");
var car_posting_card_component_1 = require("./pages/find-car/car-posting-card/car-posting-card.component");
var passenger_posting_card_component_1 = require("./pages/find-passenger/passenger-posting-card/passenger-posting-card.component");
var search_form_welcomepage_component_1 = require("./components/search-form-welcomepage/search-form-welcomepage.component");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                find_car_component_1.FindCarComponent,
                find_passenger_component_1.FindPassengerComponent,
                login_component_1.LoginComponent,
                welcome_page_component_1.WelcomePageComponent,
                page_not_found_component_1.PageNotFoundComponent,
                car_posting_card_component_1.CarPostingCardComponent,
                passenger_posting_card_component_1.PassengerPostingCardComponent,
                search_form_welcomepage_component_1.SearchFormWelcomepageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
