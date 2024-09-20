import {IPaginationInfo} from "../Models/IPaginationInfo"

export interface IResponseWrapper<T> {
    httpStatusCode: number;
    errorMessages:string[];
    paginationInfo : IPaginationInfo;
    data : T;
}
