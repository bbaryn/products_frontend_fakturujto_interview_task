import { styled } from 'styled-components';

export const BackButton = styled.button`
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

export const Title = styled.h1`
    font-size: 32px;
    margin-top: 0;
    text-align: center;
`;

export const Label = styled.label`
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

export const fieldStyle = {
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    borderRadius: '4px',
    fontSize: '16px',
    padding: '5px 5px',
};
