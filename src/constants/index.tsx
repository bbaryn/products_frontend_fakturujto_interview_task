import { InitialValues } from '@typing/global';

export const BACKEND_URL = 'http://localhost:3000';

export enum FormTitle {
    ADD_FORM = 'Add form',
    EDIT_FORM = 'Edit form',
}
export enum CategoryType {
    SMARTPHONES = 'smartphones',
    LAPTOPS = 'laptops',
    DISPLAYS = 'displays',
}

export const initialValues: InitialValues = {
    name: '',
    price: undefined,
    stock: undefined,
    date: new Date('1-1-2023').toLocaleDateString('pl-PL'),
    category: CategoryType.LAPTOPS,
    description: '',
};
