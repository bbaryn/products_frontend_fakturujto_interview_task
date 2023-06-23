import React, { MouseEvent } from 'react';
import {
    ButtonContainer,
    Container,
    DeleteButton,
    EditButton,
    Title,
} from './styles';

interface Props {
    title: string;
    handleElementClick: () => void;
    handleEditButtonClick: (e: MouseEvent<HTMLElement>) => void;
    handleDeleteButtonClick: (e: MouseEvent<HTMLElement>) => void;
}

export const ListContainer = ({
    title,
    handleElementClick,
    handleEditButtonClick,
    handleDeleteButtonClick,
}: Props): JSX.Element => (
    <Container onClick={handleElementClick}>
        <Title>{title}</Title>
        <ButtonContainer>
            <EditButton onClick={handleEditButtonClick}>Edit</EditButton>
            <DeleteButton onClick={handleDeleteButtonClick}>
                Delete
            </DeleteButton>
        </ButtonContainer>
    </Container>
);
