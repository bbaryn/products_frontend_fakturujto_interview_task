import React, { MouseEvent, useState } from 'react';

import styled from 'styled-components';
import { Product } from '../pages/Home/Home';
import { useNavigate } from 'react-router-dom';

//const ListElement = (productName: string, productPrice: number, productStock: number, productProductionDate: string, productCategory: string, productDescription: string) 

interface Props {
    product: Product;
}

const Wrapper = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
`;
const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    border: 1px solid black;
    margin-bottom: 15px;
    border-radius: 25px;
    padding: 10px;
    transition: all 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: lightgray;
      }
`;
const DetailsContainer = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 25%;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    margin-left: 10px;
    font-size: 16px;
    color: black;
`;
const DetailsElement = styled.div`
    font-size: 14px;
`;
const Button = styled.button`
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background: none;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: gray;
    }
`;

const EditButton = styled(Button)`
    background-color: blue;
`;

const DeleteButton = styled(Button)`
    background-color: red;
`;

const ListElement = ({product}: Props): JSX.Element => {
    const [isDetailsShow, setIsDetailsShow] = useState(false);
    const navigate = useNavigate();
    const handleElementClick = () => {
        setIsDetailsShow(!isDetailsShow);
    }

    const handleEditButtonClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        navigate(`${product._id}/edit`, {
            state: {
                productId: product._id,
              currentFormName: 'Edit form',
            }})
    }

    const handleDeleteButtonClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    }

    return (
        <Wrapper>
            <ListContainer onClick={handleElementClick}>
                <Title>{product.name}</Title>
                <ButtonContainer>
                    <EditButton onClick={handleEditButtonClick}>Edit</EditButton>
                    <DeleteButton onClick={handleDeleteButtonClick}>Delete</DeleteButton>
                </ButtonContainer>
            </ListContainer>
            {isDetailsShow && <DetailsContainer>
                <DetailsElement>{product.price}</DetailsElement>
                <DetailsElement>{product.stock}</DetailsElement>
                <DetailsElement>{new Date(product.date).toISOString().substring(0, 10)}</DetailsElement>
                <DetailsElement>{product.category}</DetailsElement>
            </DetailsContainer>}
        </Wrapper>
    );
};

export default ListElement;