import { IClaimAddModel } from "../../../Shared/Models/Claim/IClaimAddModel";
import { IClaimAddResponse } from "../../../Shared/Models/Claim/IClaimAddResponse";
import { IClaimQueryResponse } from "../../../Shared/Models/Claim/IClaimQueryResponse";
import { IClaimUpdateModel } from "../../../Shared/Models/Claim/IClaimUpdateModel";
import { IBaseService } from "./IBaseService";

export interface IClaimService  
extends IBaseService<IClaimQueryResponse,IClaimAddModel,IClaimUpdateModel,IClaimAddResponse>
{

}