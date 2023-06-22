import React, { MouseEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ListWrapper } from './styles';
import { ListContainer } from '@components/ListContainer/ListContainer';
import { Product } from '@typing/global';
import { DetailContainer } from '@components/DetailContainer/DetailContainer';
import { FormTitle } from '@constants/index';
import { useDispatch } from 'react-redux';
import { addCurrentElementId, deleteProduct } from '@store/shape/slice';

interface Props {
    product: Product;
}

const ListElement = ({ product }: Props): JSX.Element => {
    const dispatch = useDispatch();
    const [isDetailsShow, setIsDetailsShow] = useState(false);
    const navigate = useNavigate();
    const handleElementClick = () => {
        setIsDetailsShow(!isDetailsShow);
    };

    const handleEditButtonClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        dispatch(addCurrentElementId(product._id));
        navigate(`${product._id}/edit`, {
            state: {
                currentFormTitle: FormTitle.EDIT_FORM,
                productId: product._id,
            },
        });
    };

    const handleDeleteButtonClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        dispatch(deleteProduct(product._id));
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
