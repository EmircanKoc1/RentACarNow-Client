import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ICarService } from '../interfaces/car.service.interface';
import { ICarQueryResponse } from '../../../shared/models/car/get-car.response.model';
import { IAddCarModel } from '../../../shared/models/car/add-car.model';
import { IUpdateCarModel } from '../../../shared/models/car/update-car.model';
import { IAddCarResponse } from '../../../shared/models/car/add-car.response.model';
import { Observable } from 'rxjs';
import { IAddCarFeatureModel } from '../../../shared/models/car/add-car-feature.model';
import { IAddCarFeatureResponseModel } from '../../../shared/models/car/add-car-feature.response.model';
import { IUpdateCarFeatureModel } from '../../../shared/models/car/update-car-feature.model';
import { IGeneralResponse } from '../../../shared/models/general.response.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService
  extends BaseService<ICarQueryResponse, IAddCarModel, IUpdateCarModel, IAddCarResponse>
  implements ICarService {

  constructor() {
    super();
  }
  AddFeatureCar(apiEndpoint: string, requestModel: IAddCarFeatureModel): Observable<IAddCarFeatureResponseModel> {
    return this.httpClient.post<IAddCarFeatureResponseModel>(`${this.writeApiUrl}${apiEndpoint}`, requestModel);
  }
  UpdateFeatureCar(apiEndpoint: string, requestModel: IUpdateCarFeatureModel): Observable<IGeneralResponse> {
    return this.httpClient.put<IGeneralResponse>(`${this.writeApiUrl}${apiEndpoint}`, requestModel);
  }
  DeleteFeatureCar(apiEndpoint: string, featureId: string): Observable<IGeneralResponse> {

    const params = new HttpParams()
      .set("FeatureId", featureId)

    return this.httpClient.delete<IGeneralResponse>(`${this.writeApiUrl}${apiEndpoint}`,{ params });

  }
}
