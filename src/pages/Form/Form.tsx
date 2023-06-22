import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

const initialValues = {
    name: '',
    price: '',
    stock: '',
    date: '',
    category: '',
    description: '',
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const BackButton = styled.button`
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: black;
    margin: 25px 0;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: gray;
    }
`;

const Title = styled.h1`
    font-size: 32px;
    margin-top: 0;
    text-align: center;
`;

const Label = styled.label`
    margin-top: 15px;
    width: 100%;
`;

export const Submit = styled.button`
    width: 250px;
    align-self: center;
    margin-top: 1.5rem;

    background-color: rgb(24, 81, 187);
    display: block;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    font-style: normal;
    font-weight: 700;
    height: 3rem;
    white-space: nowrap;
    color: rgb(232, 243, 255) !important;
    padding: 0.5rem 1rem;

    &:active,
    &:focus,
    &:hover {
        cursor: pointer;
    }

    &:disabled {
        cursor: pointer;
        background-color: rgb(163, 168, 173);
        box-shadow: none;
        color: rgb(255, 255, 255) !important;

        &:hover,
        &:focus {
            cursor: not-allowed;
        }
    }
`;

const fieldStyle = {
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    borderRadius: '4px',
    fontSize: '16px',
    padding: '5px 5px',
};

export interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    date: string;
    category: string;
    __v: number;
}

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
                        <Title>{location.state.currentFormName}</Title>
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
