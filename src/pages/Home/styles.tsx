import { styled } from 'styled-components';

export const AddButton = styled.button`
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
