import { IResponseErrorModel } from "../error.response.model";

export interface IAddCarFeatureResponseModel{
    carId:string;
    featureId:string;
    httpStatusCode:number;
    errors:IResponseErrorModel[];
}