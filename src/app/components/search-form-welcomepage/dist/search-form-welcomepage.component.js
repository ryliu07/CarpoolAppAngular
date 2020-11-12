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
        this.monthString = ["January",
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
        this.months = [];
        this.days = [];
        this.years = [];
        this.currentDate = new Date();
    }
    SearchFormWelcomepageComponent.prototype.ngOnInit = function () {
        this.year = this.currentDate.getFullYear();
        this.month = this.monthString[this.currentDate.getMonth()];
        this.day = this.currentDate.getDate();
        console.log(this.month);
        this.updateDayFromMonth();
        this.udpateDayMonthFromYear();
        for (var i = 0; i < 3; i++) {
            this.years.push(this.currentDate.getFullYear() + i);
        }
    };
    SearchFormWelcomepageComponent.prototype.onTimeChange = function (event) {
        switch (event.target.value) {
            case "Morning":
                this.time = [6, 12];
                break;
            case "Afternoon":
                this.time = [12, 17];
                break;
            case "Evening":
                this.time = [17, 24];
                break;
        }
    };
    SearchFormWelcomepageComponent.prototype.getAddress = function (place) {
        this.departure = place['formatted_address'];
    };
    SearchFormWelcomepageComponent.prototype.udpateDayMonthFromYear = function () {
        if (this.year == this.currentDate.getFullYear()) {
            this.months = this.monthString.slice(this.currentDate.getMonth());
            this.day = this.currentDate.getDate();
        }
        else {
            this.months = this.monthString;
        }
        this.month = this.months[0];
        this.updateDayFromMonth();
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
        if (this.year == this.currentDate.getFullYear()) {
            for (var i = 0; i <= numOfDays - this.currentDate.getDate(); i++) {
                this.days.push(this.day + i);
            }
        }
        else {
            for (var i = 1; i <= numOfDays; i++) {
                this.days.push(i);
            }
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
