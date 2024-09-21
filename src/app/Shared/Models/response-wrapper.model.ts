import {IPaginationInfo} from "./pagination-info.model"

export interface IResponseWrapper<T> {
    httpStatusCode: number;
    errorMessages:string[];
    paginationInfo : IPaginationInfo;
    data : T;
}
