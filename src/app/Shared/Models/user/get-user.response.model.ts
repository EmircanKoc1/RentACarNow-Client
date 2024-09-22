export interface IUserQueryResponse {
    userId: string;
    name: string;
    surname: string;
    age: number;
    phoneNumber: string;
    email: string;
    password: string;
    walletBalance: number;
    claims: IClaimModel[];
}

interface IClaimModel {

    id: string;
    key: string;
    value: string;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}