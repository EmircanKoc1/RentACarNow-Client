import { Observable } from "rxjs";
import { IResponseWrapper } from "../../../shared/models/response-wrapper.model";
import { IGetAllQueryParam } from "../../../shared/models/get-all-query-param.model";
import { IGetByIdQueryParam } from "../../../shared/models/get-by-id-param.model";
import { IGeneralResponse } from "../../../shared/models/general.response.model";

export interface IBaseService<T, TAddModel, TUpdateModel, TAddResponse> {

    getAll(queryParam?: IGetAllQueryParam): Observable<IResponseWrapper<T[]>>;
    getById(queryParam: IGetByIdQueryParam): Observable<IResponseWrapper<T>>;
    Add(model: TAddModel): Observable<TAddResponse>;
    Update(model: TUpdateModel): Observable<IGeneralResponse>;
    Delete(id: string): Observable<IGeneralResponse>
}