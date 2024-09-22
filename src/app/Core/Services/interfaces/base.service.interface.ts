import { Observable } from "rxjs";
import { IResponseWrapper } from "../../../shared/models/response-wrapper.model";
import { IGetAllQueryParam } from "../../../shared/models/get-all-query-param.model";
import { IGetByIdQueryParam } from "../../../shared/models/get-by-id-param.model";
import { IGeneralResponse } from "../../../shared/models/general.response.model";

export interface IBaseService<T,TAddModel,TUpdateModel,TAddResponse> {

    getAll(apiEndpoint: string, queryParam: IGetAllQueryParam): Observable<IResponseWrapper<T[]>>;
    getById(apiEndpoint: string, queryParam: IGetByIdQueryParam): Observable<IResponseWrapper<T>>;
    Add(apiEndpoint: string, model: TAddModel): Observable<TAddResponse>;
    Update(apiEndpoint:string,model:TUpdateModel):Observable<IGeneralResponse>;
    Delete(apiEndpoint:string , id :string):Observable<IGeneralResponse>
}