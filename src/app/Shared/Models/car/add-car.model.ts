import { CarFuelType } from "./car-fuel-type.enum";
import { CarTransmissionType } from "./car-transmission-type.enum";

export interface IAddCarModel {
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
    carFuelType: CarFuelType;
    transmissionType: CarTransmissionType;
    releaseDate: Date;
    brandId: string;
}
