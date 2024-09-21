import { Observable } from "rxjs";
import { IResponseWrapper } from "../../../Shared/Models/IResponseWrapper";
import { IGetAllQueryParam } from "../../../Shared/Models/IGetAllQueryParam";
import { IGetByIdQueryParam } from "../../../Shared/Models/IGetByIdQueryParam";
import { IGeneralResponse } from "../../../Shared/Models/IGeneralResponse";

export interface IBaseService<T,TAddModel,TUpdateModel,TAddResponse> {

    getAll(apiEndpoint: string, queryParam: IGetAllQueryParam): Observable<IResponseWrapper<T[]>>;
    getById(apiEndpoint: string, queryParam: IGetByIdQueryParam): Observable<IResponseWrapper<T>>;
    Add(apiEndpoint: string, model: TAddModel): Observable<TAddResponse>;
    Update(apiEndpoint:string,model:TUpdateModel):Observable<IGeneralResponse>;
    Delete(apiEndpoint:string , id :string):Observable<IGeneralResponse>
}