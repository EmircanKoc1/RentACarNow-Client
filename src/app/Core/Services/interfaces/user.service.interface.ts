import { Observable } from "rxjs";
import { IAddUserClaimModel } from "../../../shared/models/user/add-user-claim.model";
import { IUserAddModel } from "../../../shared/models/user/add-user.model";
import { IUserAddResponse } from "../../../shared/models/user/add-user.response.model";
import { IUserQueryResponse } from "../../../shared/models/user/get-user.response.model";
import { IUserUpdateModel } from "../../../shared/models/user/update-user.model";
import { IBaseService } from "./base.service.interface";
import { IAddUserClaimResponseModel } from "../../../shared/models/user/add-user-claim.response.model";
import { IGeneralResponse } from "../../../shared/models/general.response.model";

export interface IUserService
    extends IBaseService<IUserQueryResponse, IUserAddModel, IUserUpdateModel, IUserAddResponse> {

        AddClaimUser(apiEndpoint:string,model:IAddUserClaimModel):Observable<IAddUserClaimResponseModel>;
        DeleteClaimUser(apiEndpoint:string,userId:string,claimId:string):Observable<IGeneralResponse>;
}