import { IResponseErrorModel } from "../error.response.model";

export interface IBrandAddResponseModel{
brandId:string;
httpStatusCode:number;
errors:IResponseErrorModel[];

}