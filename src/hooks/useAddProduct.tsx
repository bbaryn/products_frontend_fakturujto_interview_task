import { BACKEND_URL } from '@constants/index';
import { Product } from '@typing/global';
import axios from 'axios';

const useAddProduct = async (data: Product): Promise<Product> => {
    try {
        const response = await axios.post(`${BACKEND_URL}/products/add`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default useAddProduct;
