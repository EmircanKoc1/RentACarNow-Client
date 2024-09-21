import { IResponseErrorModel } from "../IResponseErrorModel";

export interface IClaimAddResponse{

    claimId:string;
    statusCode:number;
    errors:IResponseErrorModel[];

}