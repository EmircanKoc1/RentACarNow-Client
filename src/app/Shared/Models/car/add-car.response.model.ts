import { IResponseErrorModel } from "../error.response.model";

export interface CreateCarCommandResponse {
    carId: string; 
    statusCode: number; 
    errors: IResponseErrorModel[];
}
