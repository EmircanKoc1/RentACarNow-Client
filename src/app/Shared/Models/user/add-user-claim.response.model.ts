import { IResponseErrorModel } from "../error.response.model";

export interface IAddUserClaimResponseModel {
    userId: string;
    claimId: string;
    httpStatusCode: number;
    errors: IResponseErrorModel[];
}