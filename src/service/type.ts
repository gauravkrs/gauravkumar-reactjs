export interface IProduct {
    avatar: string;
    category: string;
    createdAt?: string;
    description: string;
    developerEmail: string;
    name: string;
    price: number;
    updatedAt?: string;
    __v?: number;
    _id?: string;
}


export interface ICategory {
    createdAt: string;
    name: string;
    updatedAt: string;
    __v: number;
    _id: string;
}