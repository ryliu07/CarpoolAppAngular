"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchFormWelcomepageComponent = void 0;
var core_1 = require("@angular/core");
var SearchFormWelcomepageComponent = /** @class */ (function () {
    function SearchFormWelcomepageComponent() {
        this.months = ["January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"];
        this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
        this.years = [];
        this.currentDate = new Date();
    }
    SearchFormWelcomepageComponent.prototype.ngOnInit = function () {
        this.year = this.currentDate.getFullYear();
        this.month = this.months[this.currentDate.getMonth()];
        this.day = this.currentDate.getDate();
        console.log(this.month);
        this.updateDayFromMonth();
        for (var i = -1; i < 2; i++) {
            this.years.push(this.currentDate.getFullYear() + i);
        }
    };
    SearchFormWelcomepageComponent.prototype.updateDayFromMonth = function () {
        this.days = [];
        var numOfDays;
        switch (this.month) {
            case "January":
            case "March":
            case "May":
            case "July":
            case "August":
            case "October":
            case "December": {
                numOfDays = 31;
                break;
            }
            case "April":
            case "June":
            case "September":
            case "November": {
                numOfDays = 30;
                break;
            }
            case "February": {
                if (this.year % 4 == 0) {
                    numOfDays = 29;
                }
                else {
                    numOfDays = 28;
                }
                break;
            }
        }
        for (var i = 1; i <= numOfDays; i++) {
            this.days.push(i);
        }
    };
    SearchFormWelcomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-search-form-welcomepage',
            templateUrl: './search-form-welcomepage.component.html',
            styleUrls: ['./search-form-welcomepage.component.css']
        })
    ], SearchFormWelcomepageComponent);
    return SearchFormWelcomepageComponent;
}());
exports.SearchFormWelcomepageComponent = SearchFormWelcomepageComponent;
