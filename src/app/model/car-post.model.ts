export interface CarPost {

    id: number;

    departure: string;
    destination: string;
    dropoff: string[];

    // plate: string;
    // phoneNum: string;

    occupancy: number;
    luggage: number;

    timeBegin: Date;
    timeEnd: Date;
    note:  string;

}