import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form-welcomepage',
  templateUrl: './search-form-welcomepage.component.html',
  styleUrls: ['./search-form-welcomepage.component.css']
})
export class SearchFormWelcomepageComponent implements OnInit {

  months: string[] = ["January",
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
  days: number[] = [];
  years: number[] = [];
  currentDate = new Date();
  year:number;
  month:string;
  day:number;
  departure:object;
  destination:object;

  constructor() { }

  ngOnInit(): void {
    this.year = this.currentDate.getFullYear();
    this.month = this.months[this.currentDate.getMonth()];
    this.day = this.currentDate.getDate();
    console.log(this.month);
    this.updateDayFromMonth();
    for(var i = -1; i < 2; i++){
      this.years.push(this.currentDate.getFullYear() + i);
    }
  }

  getAddress(place: object) { 
    this.departure = place['formatted_address'];
  }

  updateDayFromMonth(): void{
    this.days = [];
    var numOfDays;
    switch(this.month){
      case "January":
      case "March":
      case "May":
      case "July":
      case "August":
      case "October":
      case "December":{
        numOfDays = 31;
        break;
      }

      case "April":
      case "June":
      case "September":
      case "November":{
        numOfDays = 30;
        break;
      }

      case "February":{
        if(this.year%4==0){
          numOfDays = 29;
        }else{
          numOfDays = 28;
        }
        break;
      }
    }

    for(var i = 1; i <= numOfDays; i++){
      this.days.push(i);
    }
  }

}
