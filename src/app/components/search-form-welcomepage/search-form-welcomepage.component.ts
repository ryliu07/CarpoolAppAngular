import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form-welcomepage',
  templateUrl: './search-form-welcomepage.component.html',
  styleUrls: ['./search-form-welcomepage.component.css']
})
export class SearchFormWelcomepageComponent implements OnInit {

  monthString: string[] = ["January",
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
  
  months: string[] = [];
  days: number[] = [];
  years: number[] = [];
  currentDate = new Date();
  year:number;
  month:string;
  day:number;
  time:number[];
  departure:object;
  destination:object;

  constructor() { }

  ngOnInit(): void {
    this.year = this.currentDate.getFullYear();
    this.month = this.monthString[this.currentDate.getMonth()];
    this.day = this.currentDate.getDate();
    console.log(this.month);
    this.updateDayFromMonth();
    this.udpateDayMonthFromYear();
    for(var i = 0; i < 3; i++){
      this.years.push(this.currentDate.getFullYear() + i);
    }
  }

  onTimeChange(event: Event){
    switch((<HTMLSelectElement>event.target).value){
      case "Morning":
        this.time = [6,12];
        break;
      case "Afternoon":
        this.time = [12,17];
        break;
      case "Evening":
        this.time = [17,24];
        break;
    }
  }

  getAddress(place: object) { 
    this.departure = place['formatted_address'];
  }
  

  udpateDayMonthFromYear(): void{
    if(this.year == this.currentDate.getFullYear()){
      this.months = this.monthString.slice(this.currentDate.getMonth());
      this.day = this.currentDate.getDate();
    }else{
      this.months = this.monthString;
    }
    this.month = this.months[0];
    this.updateDayFromMonth();
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

    if(this.year == this.currentDate.getFullYear()){
        for(var i = 0; i <= numOfDays-this.currentDate.getDate(); i++){
        this.days.push(this.day+i);
      }
    }else{
      for(var i = 1; i <= numOfDays; i++){
        this.days.push(i);
      }
    }
  }

}
