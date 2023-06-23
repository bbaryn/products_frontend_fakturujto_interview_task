import { DatePickerField } from '@components/DatePickerField/DatePickerField';
import { FormTitle } from '@constants/index';
import { addProduct, editProduct } from '@store/shape/slice';
import { Product } from '@typing/global';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CategoryType } from '../../constants/index';
import {
    BackButton,
    ErrorMessage,
    FormWrapper,
    Label,
    Submit,
    Title,
    fieldStyle,
} from './styles';
import useEditProduct from '@hooks/useEditProduct';
import useAddProduct from '@hooks/useAddProduct';
import { setupInitialValues } from '@utils/setupInitialValues';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(100, 'Your product name is too long')
        .required('Please enter correct value'),
    price: Yup.number()
        .min(0, 'Value must not be less than 0')
        .required('Please enter correct value'),
    stock: Yup.number()
        .min(0, 'Value must not be less than 0')
        .required('Please enter correct value'),
    date: Yup.date().required('Please enter correct value'),
    category: Yup.string(),
    description: Yup.string().max(2000, 'Your description name is too long'),
});

const FormikForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = (values: Product) => {
        const formattedValues = {
            ...values,
            date: new Date(values.date).toISOString(),
        };
        if (location.state.currentFormTitle === FormTitle.EDIT_FORM) {
            useEditProduct(formattedValues, values._id)
                .then(() => {
                    dispatch(editProduct(formattedValues));
                    alert('Product has been edited');
                })
                .catch(() => alert('Something goes wrong'));
        }

        if (location.state.currentFormTitle === FormTitle.ADD_FORM) {
            useAddProduct(formattedValues)
                .then((response) => {
                    dispatch(addProduct(response));
                    alert('Product has been added');
                })
                .catch(() => alert('Something goes wrong'));
        }

        navigate('/');
    };

    return (
        <Formik
            initialValues={setupInitialValues(location.state.currentFormTitle)}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched, isSubmitting, isValid }) => (
                <FormWrapper>
                    <BackButton onClick={() => navigate(-1)}>
                        Go back
                    </BackButton>
                    <Title>{location.state.currentFormTitle}</Title>
                    <Form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                        }}
                    >
                        <Label htmlFor="name">Name</Label>
                        <Field type="text" name="name" style={fieldStyle} />
                        {errors.price && touched.price && (
                            <ErrorMessage>{errors.price}</ErrorMessage>
                        )}

                        <Label htmlFor="price">Price</Label>
                        <Field type="number" name="price" style={fieldStyle} />
                        {errors.price && touched.price && (
                            <ErrorMessage>{errors.price}</ErrorMessage>
                        )}

                        <Label htmlFor="stock">Stock</Label>
                        <Field type="number" name="stock" style={fieldStyle} />
                        {errors.stock && touched.stock && (
                            <ErrorMessage>{errors.stock}</ErrorMessage>
                        )}

                        <Label htmlFor="date">Date</Label>
                        <DatePickerField name="date" />
                        {errors.date && touched.date && (
                            <ErrorMessage>{errors.date}</ErrorMessage>
                        )}

                        <Label htmlFor="category">Category</Label>
                        <Field as="select" name="category" style={fieldStyle}>
                            {Object.values(CategoryType).map((type) => (
                                <option
                                    key={new Date().getTime() + Math.random()}
                                    value={type}
                                >
                                    {type}
                                </option>
                            ))}
                        </Field>
                        {errors.category && touched.category && (
                            <ErrorMessage>{errors.category}</ErrorMessage>
                        )}

                        <Label htmlFor="description">Description</Label>
                        <Field
                            as="textarea"
                            rows="4"
                            name="description"
                            style={fieldStyle}
                        />
                        {errors.description && touched.description && (
                            <ErrorMessage>{errors.description}</ErrorMessage>
                        )}

                        <Submit
                            type="submit"
                            disabled={!isValid || isSubmitting}
                        >
                            {isSubmitting ? `Submiting...` : `Submit`}
                        </Submit>
                    </Form>
                </FormWrapper>
            )}
        </Formik>
    );
};

export default FormikForm;
