import { BACKEND_URL } from '@constants/index';
import { Product } from '@typing/global';
import axios from 'axios';

const useEditProduct = async (data: Product, productId: string): Promise<Product> => {
    try {
        const response =  await axios.put(`${BACKEND_URL}/products/${productId}/edit`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default useEditProduct;
