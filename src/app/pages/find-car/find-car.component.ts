import { Component, OnInit } from '@angular/core';
import { CarPost } from './car-post.model';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css']
})
export class FindCarComponent implements OnInit {

  car1:CarPost = {
    departure: "Toronto",
    destination: "Markham",
    dropoff: ["North York"],

    plate: "CHAZ235",
    phoneNum: "42695291",

    occupancy: 2,
    luggage: 0,

    departureTimeRange: [new Date('2019-12-17T03:24:00'), new Date('2019-12-17T10:24:00')],
    note:  "test123"
  };

  car2:CarPost = {
    departure: "Toronto",
    destination: "Winnipeg",
    dropoff: ["Thunder Bay"],

    plate: "FWNPG",
    phoneNum: "08508112",

    occupancy: 2,
    luggage: 2,

    departureTimeRange: [new Date('2019-12-17T03:24:00'), new Date('2019-12-17T10:24:00')],
    note:  "test 190tjgnva fff"
  };

  constructor() { }

  ngOnInit(): void {
    //request to Toronto carpool list on init

  }

}
