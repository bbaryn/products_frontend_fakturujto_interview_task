import { CategoryType } from "@constants/index";

export interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    date: string;
    category: string;
    description?: string;
    __v: number;
}

export interface InitialState {
    products: Product[];
    currentElementId: string;
}

export interface InitialValues {
    name: string,
    price: number,
    stock: number,
    date: string,
    category: CategoryType,
    description: string,
}