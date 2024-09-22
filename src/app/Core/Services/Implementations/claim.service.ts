import { Injectable } from '@angular/core';
import { IClaimService } from '../interfaces/claim.service.interface';
import { Observable } from 'rxjs';
import { IClaimQueryResponse } from '../../../shared/models/claim/get-claim.response.model';
import { IResponseWrapper } from '../../../shared/models/response-wrapper.model';
import { BaseService } from './base.service';
import { IClaimAddModel } from '../../../shared/models/claim/add-claim.model';
import { IClaimUpdateModel } from '../../../shared/models/claim/update-claim.model.';
import { IClaimAddResponse } from '../../../shared/models/claim/add-claim.response.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimService
 extends BaseService<IClaimQueryResponse,IClaimAddModel,IClaimUpdateModel,IClaimAddResponse> 
 implements IClaimService 
{

}
