import ListElement from '@components/ListElement';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    date: string;
    category: string;
    __v: number;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AddButton = styled.button`
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: green;
    margin: 25px 0;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: gray;
    }
`;

const Home = () => {
    const navigate = useNavigate();
    const products: Product[] = [
        {
            _id: '6491e6728a77308990e48511',
            name: 'Yes?',
            price: 10.02,
            stock: 10,
            date: '2023-06-20T17:46:32.523Z',
            category: 'laptops',
            __v: 0,
        },
        {
            _id: '6491ea25410c6ff39770bb55',
            name: 'Test',
            price: 10.02,
            stock: 10,
            date: '2023-06-20T17:46:32.523Z',
            category: 'laptops',
            __v: 0,
        },
        {
            _id: '6491ea27410c6ff39770bb57',
            name: 'Test',
            price: 10.02,
            stock: 10,
            date: '2023-06-20T17:46:32.523Z',
            category: 'laptops',
            __v: 0,
        },
    ];
    return (
        <Wrapper>
            <AddButton
                onClick={() =>
                    navigate('add', {
                        state: {
                            currentFormName: 'Add form',
                        },
                    })
                }
            >
                Add
            </AddButton>
            {products.map((product) => (
                <ListElement product={product} />
            ))}
        </Wrapper>
    );
};

export default Home;
