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
import { HttpParams } from '@angular/common/http';
import { API_ENDPOINTS } from '../../../shared/constants/api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService
  extends BaseService<IUserQueryResponse, IUserAddModel, IUserUpdateModel, IUserAddResponse>
  implements IUserService {
  protected override apiEndpoint: string;



  constructor() {
    super();
    this.apiEndpoint = API_ENDPOINTS.user;
  }

  AddClaimUser(model: IAddUserClaimModel): Observable<IAddUserClaimResponseModel> {
    return this.httpClient.post<IAddUserClaimResponseModel>(`${this.apiEndpoint}/ClaimAddUser`, model);
  }
  DeleteClaimUser(userId: string, claimId: string): Observable<IGeneralResponse> {
    const params = new HttpParams()
      .set("UserId", userId)
      .set("ClaimId", claimId);

    return this.httpClient.delete<IGeneralResponse>(`${this.apiEndpoint}/ClaimDeleteUser`, { params });
  }
}
