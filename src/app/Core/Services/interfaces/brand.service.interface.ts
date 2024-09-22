import { IBrandAddModel } from "../../../shared/models/brand/add-brand.model";
import { IBrandAddResponseModel } from "../../../shared/models/brand/add-brand.response.model";
import { IBrandQueryResponse } from "../../../shared/models/brand/get-brand.response.model";
import { IBrandUpdateModel } from "../../../shared/models/brand/update-brand.model";
import { IBaseService } from "./base.service.interface";

export interface IBrandService
extends IBaseService<IBrandQueryResponse,IBrandAddModel,IBrandUpdateModel,IBrandAddResponseModel>{

    
}