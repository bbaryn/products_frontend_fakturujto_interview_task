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