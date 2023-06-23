import { FormTitle, initialValues } from '@constants/index';
import { useAppSelector } from '@store/hooks';
import { selectProduct } from '@store/shape/selectors';
import { InitialValues, Product } from '@typing/global';

export const setupInitialValues = (
    currentFormTitle: string
): Product | InitialValues => {
    switch (currentFormTitle) {
        case FormTitle.ADD_FORM:
            return initialValues;
        case FormTitle.EDIT_FORM:
            return useAppSelector(selectProduct);
        default:
            return initialValues;
    }
};
