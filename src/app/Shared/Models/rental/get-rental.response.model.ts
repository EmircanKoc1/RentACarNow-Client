import { CarFuelType } from "../car/car-fuel-type.enum";
import { CarTransmissionType } from "../car/car-transmission-type.enum";
import { RentalStatus } from "./rental-satus.enum";

export interface IRentalQueryResponse {

    rentalId: string;
    rentalStartedDate: Date;
    rentalEndDate: Date;
    hourlyRentalPrice: Date;
    totalRentalPrice: number;
    car: ICarModel;
    user: IUserModel;
    rentalStatus: RentalStatus;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}

interface ICarModel {
    id: string; 
    name: string;
    modal: string;
    title: string;
    hourlyRentalPrice: number; 
    kilometer: number; 
    description: string;
    color: string;
    passengerCapacity: number;
    luggageCapacity: number;
    fuelConsumption: number;
    releaseDate?: Date; 
    carFuelType: CarFuelType;
    transmissionType: CarTransmissionType;
}

interface IUserModel {
    id: string;
    name: string;
    surname: string;
    age: number;
    phoneNumber: string;
    email: string;
    password: string;
    walletBalance: number; 
}