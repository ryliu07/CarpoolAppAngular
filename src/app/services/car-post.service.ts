import { CarPost } from '../model/car-post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarPostService{

    carPostListUrl = 'http://3.136.15.175/api/carpost';
    constructor(private http: HttpClient){}

    getCarPostList(){
        return this.http.get<CarPost[]>(this.carPostListUrl)
    }
    
    
}