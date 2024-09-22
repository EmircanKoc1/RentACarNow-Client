import { Observable } from "rxjs";
import { IAddCarFeatureModel } from "../../../shared/models/car/add-car-feature.model";
import { IAddCarFeatureResponseModel } from "../../../shared/models/car/add-car-feature.response.model";
import { IAddCarModel } from "../../../shared/models/car/add-car.model";
import { IAddCarResponse } from "../../../shared/models/car/add-car.response.model";
import { ICarQueryResponse } from "../../../shared/models/car/get-car.response.model";
import { IUpdateCarFeatureModel } from "../../../shared/models/car/update-car-feature.model";
import { IUpdateCarModel } from "../../../shared/models/car/update-car.model";
import { IGeneralResponse } from "../../../shared/models/general.response.model";
import { IBaseService } from "./base.service.interface";

export interface ICarService
    extends IBaseService<ICarQueryResponse, IAddCarModel, IUpdateCarModel, IAddCarResponse> {

    AddFeatureCar(apiEndpoint: string, requestModel: IAddCarFeatureModel): Observable<IAddCarFeatureResponseModel>;
    UpdateFeatureCar(apiEndpoint: string, requestModel: IUpdateCarFeatureModel): Observable<IGeneralResponse>;
    DeleteFeatureCar(apiEndpoint: string, featureId: string): Observable<IGeneralResponse>;
}