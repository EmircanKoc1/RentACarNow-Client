import { IResponseErrorModel } from "../error.response.model";

export interface IRentalAddResponse {
    rentalId:string;
    httpStatusCode:number;
    errors:IResponseErrorModel[];
}