import { Injectable } from '@angular/core';
import { IClaimService } from '../Interfaces/IClaimService';
import { Observable } from 'rxjs';
import { IClaimQueryResponse } from '../../../Shared/Models/Claim/IClaimQueryResponse';
import { IResponseWrapper } from '../../../Shared/Models/IResponseWrapper';
import { BaseService } from './base.service';
import { IClaimAddModel } from '../../../Shared/Models/Claim/IClaimAddModel';
import { IClaimUpdateModel } from '../../../Shared/Models/Claim/IClaimUpdateModel';
import { IClaimAddResponse } from '../../../Shared/Models/Claim/IClaimAddResponse';

@Injectable({
  providedIn: 'root'
})
export class ClaimService
 extends BaseService<IClaimQueryResponse,IClaimAddModel,IClaimUpdateModel,IClaimAddResponse> 
 implements IClaimService 
{

}
