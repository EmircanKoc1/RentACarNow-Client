import { CarFuelType } from "./car-fuel-type.enum";
import { CarTransmissionType } from "./car-transmission-type.enum";

export interface ICarQueryResponse {
    carId: string; 
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
    releaseDate: Date; 
    carFuelType: CarFuelType; 
    transmissionType: CarTransmissionType; 
    brand: IBrandModel; 
    features: IFeatureModel[]; 
    createdDate: Date; 
    updatedDate: Date; 
    deletedDate: Date; 
}

interface IFeatureModel{
    id: string; 
    name: string;
    value: string;
    carId: string; 
    createdDate?: Date; 
    updatedDate?: Date; 
    deletedDate?: Date; 
}
interface IBrandModel {
    id: string; 
    name: string;
    description: string;
    createdDate?: Date; 
    updatedDate?: Date; 
    deletedDate?: Date; 
}