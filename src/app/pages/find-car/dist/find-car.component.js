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
var FindCarComponent = /** @class */ (function () {
    function FindCarComponent() {
        this.car1 = {
            departure: "Toronto",
            destination: "Markham",
            dropoff: ["North York"],
            plate: "CHAZ235",
            phoneNum: "42695291",
            occupancy: 2,
            luggage: 0,
            departureTimeRange: [new Date('2019-12-17T03:24:00'), new Date('2019-12-17T10:24:00')],
            note: "test123"
        };
        this.car2 = {
            departure: "Toronto",
            destination: "Winnipeg",
            dropoff: ["Thunder Bay"],
            plate: "FWNPG",
            phoneNum: "08508112",
            occupancy: 2,
            luggage: 2,
            departureTimeRange: [new Date('2019-12-17T03:24:00'), new Date('2019-12-17T10:24:00')],
            note: "test 190tjgnva fff"
        };
    }
    FindCarComponent.prototype.ngOnInit = function () {
        //request to Toronto carpool list on init
    };
    FindCarComponent = __decorate([
        core_1.Component({
            selector: 'app-find-car',
            templateUrl: './find-car.component.html',
            styleUrls: ['./find-car.component.css']
        })
    ], FindCarComponent);
    return FindCarComponent;
}());
exports.FindCarComponent = FindCarComponent;
