import { inject, Injectable } from '@angular/core';
import { IBaseService } from '../interfaces/base.service.interface';
import { catchError, Observable } from 'rxjs';
import { IResponseWrapper } from '../../../shared/models/response-wrapper.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  Delete(apiEndpoint: string, id: string): Observable<IGeneralResponse> {
    const params = new HttpParams()
      .set("Id", id);
    return this.httpClient.delete<IGeneralResponse>(`${this.writeApiUrl}${apiEndpoint}`, { params });
  }
  getAll(apiEndpoint: string, queryParam: IGetAllQueryParam): Observable<IResponseWrapper<T[]>> {

    const params = new HttpParams()
      .set("IsAscending", queryParam.isAscending)
      .set("SortingField", queryParam.sortingField)
      .set("PageSize", queryParam.pageSize)
      .set("PageNumber", queryParam.pageNumber);

    return this.httpClient.get<IResponseWrapper<T[]>>(
      `${this.readApiUrl}${apiEndpoint}`, { params }
    );
  }

  getById(apiEndpoint: string, queryParam: IGetByIdQueryParam): Observable<IResponseWrapper<T>> {

    const params = new HttpParams()
      .set(queryParam.idName, queryParam.id);

    return this.httpClient.get<IResponseWrapper<T>>(
      `${this.readApiUrl}${apiEndpoint}`, { params }
    );
  }


}
