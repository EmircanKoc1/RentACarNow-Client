import { IResponseErrorModel } from "../error.response.model";

export interface IUserAddResponse{
    userId:string;
    claimId:string;
    httpStatusCode:number;
    errors:IResponseErrorModel[];
}