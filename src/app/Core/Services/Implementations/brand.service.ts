import { Injectable } from '@angular/core';
import { IBrandService } from '../interfaces/brand.service.interface';
import { BaseService } from './base.service';
import { IBrandQueryResponse } from '../../../shared/models/brand/get-brand.response.model';
import { IBrandAddModel } from '../../../shared/models/brand/add-brand.model';
import { IBrandUpdateModel } from '../../../shared/models/brand/update-brand.model';
import { IBrandAddResponseModel } from '../../../shared/models/brand/add-brand.response.model';
import { API_ENDPOINTS } from '../../../shared/constants/api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class BrandService
  extends BaseService<IBrandQueryResponse, IBrandAddModel, IBrandUpdateModel, IBrandAddResponseModel>
  implements IBrandService {
  protected override apiEndpoint: string;

  constructor() {
    super();
    this.apiEndpoint = API_ENDPOINTS.brand;
  }
}
