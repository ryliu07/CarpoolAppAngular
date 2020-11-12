"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GoogleAutocompleteComponent = void 0;
var core_1 = require("@angular/core");
var GoogleAutocompleteComponent = /** @class */ (function () {
    function GoogleAutocompleteComponent() {
        this.setAddress = new core_1.EventEmitter();
    }
    GoogleAutocompleteComponent.prototype.ngOnInit = function () {
    };
    GoogleAutocompleteComponent.prototype.ngAfterViewInit = function () {
        this.getPlaceAutocomplete();
    };
    GoogleAutocompleteComponent.prototype.getPlaceAutocomplete = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.addressText.nativeElement, {
            componentRestrictions: { country: 'CA' },
            types: [this.addressType] // 'establishment' / 'address' / 'geocode'
        });
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    };
    GoogleAutocompleteComponent.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    __decorate([
        core_1.Input()
    ], GoogleAutocompleteComponent.prototype, "addressType");
    __decorate([
        core_1.Output()
    ], GoogleAutocompleteComponent.prototype, "setAddress");
    __decorate([
        core_1.ViewChild('addressText')
    ], GoogleAutocompleteComponent.prototype, "addressText");
    GoogleAutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'app-google-autocomplete',
            templateUrl: './google-autocomplete.component.html',
            styleUrls: ['./google-autocomplete.component.css']
        })
    ], GoogleAutocompleteComponent);
    return GoogleAutocompleteComponent;
}());
exports.GoogleAutocompleteComponent = GoogleAutocompleteComponent;
