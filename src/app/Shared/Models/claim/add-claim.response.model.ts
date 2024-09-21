import { IResponseErrorModel } from "../error.response.model";



export interface IClaimAddResponse{

    claimId:string;
    statusCode:number;
    errors:IResponseErrorModel[];

}