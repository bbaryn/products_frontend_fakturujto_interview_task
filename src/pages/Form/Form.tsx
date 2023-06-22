import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrapper } from '@styles/index';
import { BackButton, Label, Submit, Title, fieldStyle } from './styles';

const initialValues = {
    name: '',
    price: '',
    stock: '',
    date: '',
    category: '',
    description: '',
};

const Forms = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = (values: any) => {
        console.log(values);
        navigate('/');
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    isSubmitting,
                    isValidating,
                    isValid,
                }) => (
                    <Wrapper>
                        <BackButton onClick={() => navigate(-1)}>
                            Go back
                        </BackButton>
                        <Title>{location.state.currentFormTitle}</Title>
                        <Form
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Label htmlFor="name">Name</Label>
                            <Field type="text" name="name" style={fieldStyle} />

                            <Label htmlFor="price">Price</Label>
                            <Field
                                type="text"
                                name="price"
                                style={fieldStyle}
                            />

                            <Label htmlFor="stock">Stock</Label>
                            <Field
                                type="text"
                                name="stock"
                                style={fieldStyle}
                            />

                            <Label htmlFor="date">Date</Label>
                            <Field type="text" name="date" style={fieldStyle} />

                            <Label htmlFor="category">Category</Label>
                            <Field
                                type="text"
                                name="category"
                                style={fieldStyle}
                            />

                            <Label htmlFor="description">Description</Label>
                            <Field
                                type="text"
                                name="description"
                                style={fieldStyle}
                            />

                            <Submit
                                type="submit"
                                disabled={!isValid || isSubmitting}
                            >
                                {isSubmitting ? `Submiting...` : `Submit`}
                            </Submit>
                        </Form>
                    </Wrapper>
                )}
            </Formik>
        </>
    );
};

export default Forms;
