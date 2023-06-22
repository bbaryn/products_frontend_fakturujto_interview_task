import React, { MouseEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ListWrapper } from './styles';
import { ListContainer } from '@components/ListContainer/ListContainer';
import { Product } from '@typing/global';
import { DetailContainer } from '@components/DetailContainer/DetailContainer';
import { FormTitle } from '@constants/index';

interface Props {
    product: Product;
}

const ListElement = ({ product }: Props): JSX.Element => {
    const [isDetailsShow, setIsDetailsShow] = useState(false);
    const navigate = useNavigate();
    const handleElementClick = () => {
        setIsDetailsShow(!isDetailsShow);
    };

    const handleEditButtonClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        navigate(`${product._id}/edit`, {
            state: {
                productId: product._id,
                currentFormTitle: FormTitle.EDIT_FORM,
            },
        });
    };

    const handleDeleteButtonClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    };

    return (
        <ListWrapper>
            <ListContainer
                title={product.name}
                handleElementClick={handleElementClick}
                handleEditButtonClick={handleEditButtonClick}
                handleDeleteButtonClick={handleDeleteButtonClick}
            />
            {isDetailsShow && <DetailContainer product={product} />}
        </ListWrapper>
    );
};

export default ListElement;
