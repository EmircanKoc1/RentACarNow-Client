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

  protected readonly readApiUrl: string;
  protected readonly writeApiUrl: string;
  protected readonly httpClient: HttpClient;
  protected abstract apiEndpoint: string;


  constructor() {
    this.httpClient = inject(HttpClient);
    this.readApiUrl = environment.readApiUrl;
    this.writeApiUrl = environment.writeApiUrl;
  }
  Add(model: TAddModel): Observable<TAddResponse> {
    return this.httpClient.post<TAddResponse>(`${this.writeApiUrl}${this.apiEndpoint}`, model);
  }
  Update(model: TUpdateModel): Observable<IGeneralResponse> {
    return this.httpClient.put<IGeneralResponse>(`${this.writeApiUrl}${this.apiEndpoint}`, model);
  }
  Delete(id: string): Observable<IGeneralResponse> {
    const params = new HttpParams()
      .set("Id", id);
    return this.httpClient.delete<IGeneralResponse>(`${this.writeApiUrl}${this.apiEndpoint}`, { params });
  }
  getAll(queryParam?: IGetAllQueryParam): Observable<IResponseWrapper<T[]>> {

    const params = new HttpParams()
      .set("IsAscending", queryParam?.isAscending ?? "false")
      .set("SortingField", queryParam?.sortingField ?? "")
      .set("PageSize", queryParam?.pageSize ?? 100)
      .set("PageNumber", queryParam?.pageNumber ?? 1);

    return this.httpClient.get<IResponseWrapper<T[]>>(
      `${this.readApiUrl}${this.apiEndpoint}/GetAll`, { params }
    );
  }

  getById(queryParam: IGetByIdQueryParam): Observable<IResponseWrapper<T>> {

    const params = new HttpParams()
      .set(queryParam.idName, queryParam.id);

    return this.httpClient.get<IResponseWrapper<T>>(
      `${this.readApiUrl}${this.apiEndpoint}`, { params }
    );
  }


}
