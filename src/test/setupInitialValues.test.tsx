import { FormTitle, initialValues } from '@constants/index';
import { setupInitialValues } from '@utils/setupInitialValues';

describe('setupInitialValues', () => {
    it('should return initialValues when currentFormTitle is add form', () => {
        expect(setupInitialValues(FormTitle.ADD_FORM)).toEqual(initialValues);
    });

    it('should return initialValues when currentFormTitle is delete', () => {
        expect(setupInitialValues('delete')).toEqual(initialValues);
    });
});
