import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {  } from 'googlemaps';

@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google-autocomplete.component.html',
  styleUrls: ['./google-autocomplete.component.css']
})
export class GoogleAutocompleteComponent implements OnInit {

  @Input() addressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addressText') addressText: any;

  autocompleteInput: string;
  queryWait: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addressText.nativeElement,
        {
            componentRestrictions: { country: 'CA' },
            types: [this.addressType]  // 'establishment' / 'address' / 'geocode'
        });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }

}
