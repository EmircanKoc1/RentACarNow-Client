export interface IRentalUpdateModel {
    rentalId: string;
    rentalStartedDate: Date;
    rentalEndDate: Date;
    hourlyRentalPrice: number;
    rentalStatus: any;
    userId: string;
    carId: string;
}
