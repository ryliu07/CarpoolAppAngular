
exports.__esModule = true;
exports.CarPostService = void 0;
var CarPostService = /** @class */ (function () {
    function CarPostService() {
        this.carPostList = [
            {
                departure: "Toronto",
                destination: "Markham",
                dropoff: ["North York"],
                plate: "CHAZ235",
                phoneNum: "42695291",
                occupancy: 2,
                luggage: 0,
                departureTimeRange: [new Date('2019-12-17T03:24:00'), new Date('2019-12-17T10:24:00')],
                note: "test123"
            },
            {
                departure: "Toronto",
                destination: "Winnipeg",
                dropoff: ["Thunder Bay"],
                plate: "FWNPG",
                phoneNum: "08508112",
                occupancy: 2,
                luggage: 2,
                departureTimeRange: [new Date('2019-12-17T03:24:00'), new Date('2019-12-17T10:24:00')],
                note: "test 190tjgnva fff"
            }
        ];
    }
    return CarPostService;
}());
exports.CarPostService = CarPostService;
