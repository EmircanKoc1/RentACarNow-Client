import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IRentalService } from '../interfaces/rental.service.interface';
import { IRentalQueryResponse } from '../../../shared/models/rental/get-rental.response.model';
import { IRentalAddModel } from '../../../shared/models/rental/add-rental.model';
import { IRentalUpdateModel } from '../../../shared/models/rental/update-rental.model';
import { IRentalAddResponse } from '../../../shared/models/rental/add-rental.response.model';
import { API_ENDPOINTS } from '../../../shared/constants/api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class RentalService
  extends BaseService<IRentalQueryResponse, IRentalAddModel, IRentalUpdateModel, IRentalAddResponse>
  implements IRentalService {
  protected override apiEndpoint: string;


  constructor() {
    super();
    this.apiEndpoint = API_ENDPOINTS.rental

  }
}
