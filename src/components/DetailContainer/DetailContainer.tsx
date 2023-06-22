import React from 'react';
import { Container, DetailElement } from './styles';
import { Product } from '@typing/global';

interface Props {
    product: Product;
}

export const DetailContainer = ({ product }: Props): JSX.Element => (
    <Container>
        <DetailElement>{`Price: ${product.price}`}</DetailElement>
        <DetailElement>{`Stock: ${product.stock}`}</DetailElement>
        <DetailElement>
            {`Date: ${new Date(product.date).toISOString().substring(0, 10)}`}
        </DetailElement>
        <DetailElement>{`Category: ${product.category}`}</DetailElement>
        <DetailElement>{`Description: ${product?.description ?? ''}`}</DetailElement>
    </Container>
);
