import { IRentalAddModel } from "../../../shared/models/rental/add-rental.model";
import { IRentalAddResponse } from "../../../shared/models/rental/add-rental.response.model";
import { IRentalQueryResponse } from "../../../shared/models/rental/get-rental.response.model";
import { IRentalUpdateModel } from "../../../shared/models/rental/update-rental.model";
import { IBaseService } from "./base.service.interface";

export interface IRentalService 
extends IBaseService<IRentalQueryResponse,IRentalAddModel,IRentalUpdateModel,IRentalAddResponse>{

}