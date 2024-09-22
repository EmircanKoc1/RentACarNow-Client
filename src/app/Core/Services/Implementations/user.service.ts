import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IUserService } from '../interfaces/user.service.interface';
import { IUserAddResponse } from '../../../shared/models/user/add-user.response.model';
import { IUserQueryResponse } from '../../../shared/models/user/get-user.response.model';
import { IUserAddModel } from '../../../shared/models/user/add-user.model';
import { IUserUpdateModel } from '../../../shared/models/user/update-user.model';
import { Observable } from 'rxjs';
import { IGeneralResponse } from '../../../shared/models/general.response.model';
import { IAddUserClaimModel } from '../../../shared/models/user/add-user-claim.model';
import { IAddUserClaimResponseModel } from '../../../shared/models/user/add-user-claim.response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService
  extends BaseService<IUserQueryResponse, IUserAddModel, IUserUpdateModel, IUserAddResponse>
  implements IUserService {

  constructor() {
    super();
  }

  AddClaimUser(apiEndpoint: string, model: IAddUserClaimModel): Observable<IAddUserClaimResponseModel> {
    return this.httpClient.post<IAddUserClaimResponseModel>(apiEndpoint, model);
  }
  DeleteClaimUser(apiEndpoint: string, userId: string, claimId: string): Observable<IGeneralResponse> {
    return this.httpClient.delete<IGeneralResponse>(`${apiEndpoint}?UserId=${userId}&ClaimId=${claimId}`);
  }
}
