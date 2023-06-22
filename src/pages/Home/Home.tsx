import ListElement from '@components/ListElement/ListElement';
import { FormTitle } from '@constants/index';
import { Wrapper } from '@styles/index';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddButton } from './styles';
import { addProducts } from '@store/shape/slice';
import { useAppSelector } from '@store/hooks';
import { selectProducts } from '@store/shape/selectors';
import useGetProducts from '@hooks/useGetProducts';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const fetchedProducts = await useGetProducts();
            dispatch(addProducts(fetchedProducts));
        })();
    }, []);

    const storedProducts = useAppSelector(selectProducts);

    return (
        <Wrapper>
            <AddButton
                onClick={() =>{
                    navigate('add', {
                        state: {
                            currentFormTitle: FormTitle.ADD_FORM,
                        },
                    })
                }}
            >
                Add
            </AddButton>
            {storedProducts?.map((product) => (
                <ListElement key={product._id} product={product} />
            ))}
        </Wrapper>
    );
};

export default Home;
