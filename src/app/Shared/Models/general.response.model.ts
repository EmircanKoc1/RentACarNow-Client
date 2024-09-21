import { IResponseErrorModel } from "./error.response.model";

export interface IGeneralResponse{
    httpStatusCode:number;
    errors:IResponseErrorModel[];
}

