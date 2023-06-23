import { styled } from 'styled-components';

export const Container = styled.div`
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

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    margin-left: 10px;
    font-size: 16px;
    color: black;
`;

export const Button = styled.button`
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

export const EditButton = styled(Button)`
    background-color: blue;
`;

export const DeleteButton = styled(Button)`
    background-color: red;
`;
