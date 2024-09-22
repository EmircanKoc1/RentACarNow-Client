
import { IClaimAddResponse } from "../../../shared/models/claim/add-claim.response.model";
import { IClaimAddModel } from "../../../shared/models/claim/add-claim.model";
import { IClaimQueryResponse } from "../../../shared/models/claim/get-claim.response.model";
import { IClaimUpdateModel } from "../../../shared/models/claim/update-claim.model.";
import { IBaseService } from "./base.service.interface";

export interface IClaimService  
extends IBaseService<IClaimQueryResponse,IClaimAddModel,IClaimUpdateModel,IClaimAddResponse>
{

}