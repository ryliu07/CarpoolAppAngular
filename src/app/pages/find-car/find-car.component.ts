import { Component, OnInit } from '@angular/core';
import { CarPostService } from 'src/app/services/car-post.service';
import { CarPost } from '../../model/car-post.model';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css'],
  providers: [CarPostService]
})
export class FindCarComponent implements OnInit {

  carPostList:CarPost[];

  constructor(private carPostService: CarPostService) { }

  ngOnInit(): void {
    //request to Toronto carpool list on init
    this.carPostService.getCarPostList()
      .subscribe((data: CarPost[]) => this.carPostList = data);
      console.log(this.carPostList);
  }

}
