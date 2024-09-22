import { inject, Injectable } from '@angular/core';
import { IBaseService } from '../interfaces/base.service.interface';
import { catchError, Observable } from 'rxjs';
import { IResponseWrapper } from '../../../shared/models/response-wrapper.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IGetAllQueryParam } from '../../../shared/models/get-all-query-param.model';
import { IGetByIdQueryParam } from '../../../shared/models/get-by-id-param.model';
import { IGeneralResponse } from '../../../shared/models/general.response.model';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T, TAddModel, TUpdateModel, TAddResponse>
  implements IBaseService<T, TAddModel, TUpdateModel, TAddResponse> {

  protected readApiUrl: string = environment.readApiUrl;
  protected writeApiUrl: string = environment.writeApiUrl;
  protected httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
  }
  Add(apiEndpoint: string, model: TAddModel): Observable<TAddResponse> {
    return this.httpClient.post<TAddResponse>(`${this.writeApiUrl}${apiEndpoint}`, model);
  }
  Update(apiEndpoint: string, model: TUpdateModel): Observable<IGeneralResponse> {
    return this.httpClient.put<IGeneralResponse>(`${this.writeApiUrl}${apiEndpoint}`, model);
  }
  Delete(apiEndpoint: string, id: String): Observable<IGeneralResponse> {
    return this.httpClient.delete<IGeneralResponse>(`${this.writeApiUrl}${apiEndpoint}?Id=${id}`);
  }
  getAll(apiEndpoint: string, queryParam: IGetAllQueryParam): Observable<IResponseWrapper<T[]>> {
    return this.httpClient.get<IResponseWrapper<T[]>>(
      `${this.readApiUrl}${apiEndpoint}?IsAscending=${queryParam.isAscending}&SortingField=${queryParam.sortingField}&PageSize=${queryParam.pageSize}&PageNumber=${queryParam.pageNumber}`
    );
  }

  getById(apiEndpoint: string, queryParam: IGetByIdQueryParam): Observable<IResponseWrapper<T>> {
    return this.httpClient.get<IResponseWrapper<T>>(
      `${this.readApiUrl}${apiEndpoint}?${queryParam.idName}=${queryParam.id}`
    );
  }


}
