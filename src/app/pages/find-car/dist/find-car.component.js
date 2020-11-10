"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FindCarComponent = void 0;
var core_1 = require("@angular/core");
var car_post_service_1 = require("src/app/services/car-post.service");
var FindCarComponent = /** @class */ (function () {
    function FindCarComponent(carPostService) {
        this.carPostService = carPostService;
    }
    FindCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //request to Toronto carpool list on init
        this.carPostService.getCarPostList()
            .subscribe(function (data) { return _this.carPostList = data; });
        console.log(this.carPostList);
    };
    FindCarComponent = __decorate([
        core_1.Component({
            selector: 'app-find-car',
            templateUrl: './find-car.component.html',
            styleUrls: ['./find-car.component.css'],
            providers: [car_post_service_1.CarPostService]
        })
    ], FindCarComponent);
    return FindCarComponent;
}());
exports.FindCarComponent = FindCarComponent;
