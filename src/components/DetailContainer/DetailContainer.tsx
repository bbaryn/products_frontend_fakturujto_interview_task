import React from 'react';
import { Container, DetailElement } from './styles';
import { Product } from '@typing/global';

interface Props {
    product: Product;
}

export const DetailContainer = ({ product }: Props): JSX.Element => (
    <Container>
        <DetailElement>{product.price}</DetailElement>
        <DetailElement>{product.stock}</DetailElement>
        <DetailElement>
            {new Date(product.date).toISOString().substring(0, 10)}
        </DetailElement>
        <DetailElement>{product.category}</DetailElement>
    </Container>
);
