import { Component, Input, OnInit } from '@angular/core';
import { CarPost } from 'src/app/model/car-post.model';

@Component({
  selector: 'car-posting-card',
  templateUrl: './car-posting-card.component.html',
  styleUrls: ['./car-posting-card.component.css']
})
export class CarPostingCardComponent implements OnInit {

  @Input() post: CarPost;
  constructor() { }

  ngOnInit(): void {
  }

}
