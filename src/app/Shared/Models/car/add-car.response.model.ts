import { IResponseErrorModel } from "../error.response.model";

export interface IAddCarResponse {
    carId: string; 
    statusCode: number; 
    errors: IResponseErrorModel[];
}
