import { IResponseErrorModel } from "./IResponseErrorModel";

export interface IGeneralResponse{
    httpStatusCode:number;
    errors:IResponseErrorModel[];
}

