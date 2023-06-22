import ListElement from '@components/ListElement/ListElement';
import { FormTitle } from '@constants/index';
import { Wrapper } from '@styles/index';
import { Product } from '@typing/global';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AddButton } from './styles';

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
                            currentFormTitle: FormTitle.ADD_FORM,
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
