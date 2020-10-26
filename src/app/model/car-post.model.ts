export interface CarPost {

    departure: string;
    destination: string;
    dropoff: string[];

    plate: string;
    phoneNum: string;

    occupancy: number;
    luggage: number;

    departureTimeRange: Date[];
    note:  string;

}